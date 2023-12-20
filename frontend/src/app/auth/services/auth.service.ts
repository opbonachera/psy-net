import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';

@Injectable({providedIn: 'root'})
export class ServiceNameService {
    private readonly baseUrl:string = environment.baseUrl;

    constructor(private httpClient: HttpClient){
        console.log(this.baseUrl);
    }
    
}