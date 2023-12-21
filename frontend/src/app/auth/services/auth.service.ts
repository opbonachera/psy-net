import { Injectable, computed, signal } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';

import { Observable, catchError, map, of, tap, throwError } from 'rxjs';

import { environment } from 'src/environments/environments';
import { CheckTokenResponse, LoggedUser, LoginResponse } from '../interfaces/index';
import { AuthStatus } from '../interfaces/index';
import { RegisterResponse } from '../interfaces/index';
@Injectable({providedIn: 'root'})
export class AuthService {
    private readonly baseUrl:string = environment.baseUrl;
    
    private _currentUser = signal<LoggedUser|null>(null);
    private _authStatus = signal<AuthStatus>( AuthStatus.checking );

    public currentUser = computed( ()=> this._currentUser() );
    public authStatus = computed( ()=> this._authStatus() );

    constructor(private httpClient: HttpClient){ this.checkAuthStatus().subscribe() }
    
    register(
        username:string,
        fullName:string,
        email:string,
        password:string,
        isActive:true
    ){
        
        const url = `${ this.baseUrl }auth/register`;
        const body = { username:username, fullName: fullName, email:email, password:password, isActive:isActive}

        // If registering succeeds, show a message and redirect to login after n seconds
        return this.httpClient.post<RegisterResponse>(url,body)
               .pipe(
                    tap( (res)=>{ console.log(res) }),
                    map( ()=> true ),
                    // Show error message in a toast
                    catchError( err =>{ return throwError(()=> err.error.message ) })
               )
    }

    login( username:string, password:string ): Observable<boolean>{

        const url = `${this.baseUrl}auth/login`;
        const body = { username:username, password: password};

        return this.httpClient.post<LoginResponse>(url,body)
               .pipe(
                    tap( ({ loggedUser, token })=>{ this.setAuthentication( loggedUser, token ) }),
                    map( ()=> true ),
                    catchError( err =>{ return throwError(()=> err.error.message ) })
               )
        
    }

    checkAuthStatus():Observable<boolean>{
        const url = `${ this.baseUrl }/auth/check-token`;
        const token = localStorage.getItem('token');
         
        if(!token) {
            this._authStatus.set(AuthStatus.notAuthenticated)
            return of(false)
        };
        
        const headers = new HttpHeaders().set('Authorization',`Bearer ${ token }`);

        this.httpClient.get<CheckTokenResponse>(url, { headers })
                       .pipe(
                            map( ({ loggedUser, token }) => { this.setAuthentication( loggedUser, token )}),
                            catchError(()=>{
                                this._authStatus.set( AuthStatus.notAuthenticated );
                                return of(false);
                            })
                       )
        
        return of(false);
    }

    logout(){
        localStorage.removeItem('token');
        this._authStatus.set( AuthStatus.notAuthenticated );
    }

    private setAuthentication( loggedUser: LoggedUser, token: string ):boolean{

        this._currentUser.set( loggedUser );
        this._authStatus.set( AuthStatus.authenticated );
        localStorage.setItem('token',token);

        return true;
    }

    getTakenUsernames(){
        const url = `${this.baseUrl}auth/user-list`;

        return this.httpClient.get(url)
    }
}