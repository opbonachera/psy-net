import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AuthStatus } from '../interfaces';

export const isNotAuthenticatedGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService);
  const router = inject( Router );

  if(authService.authStatus() === AuthStatus.authenticated){
    router.navigateByUrl('/dashboard/menu');
    return false;
  }

  return true;
};
