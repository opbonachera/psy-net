import { Injectable, inject } from "@angular/core";
import { AbstractControl, AsyncValidator, ValidationErrors } from "@angular/forms";
import { AuthService } from "../services/auth.service";
import { Observable, delay, of, tap, map, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class UsernameValidator implements AsyncValidator {
  private authService = inject(AuthService)

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const username = control.value;

    return this.isTaken(username).pipe(
      map(res => (res ? { usernameTaken: true } : null)),
      catchError(() => of(null))
    );
  }

  private isTaken(username: string): Observable<boolean> {
    return this.authService.getTakenUsernames().pipe(
      map((res) => Object.values(res).includes(username)),
      catchError((error) => {
        console.error("Error fetching taken usernames:", error);
        return of(false);
      })
    );
  }
}