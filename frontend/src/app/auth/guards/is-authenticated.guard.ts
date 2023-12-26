import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { AuthStatus } from '../interfaces';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {
  const authService = inject( AuthService );
  const router = inject(Router);

  if ( authService.authStatus() === AuthStatus.authenticated || authService.authStatus() === AuthStatus.checking ) return true;
  
  // if ( authService.authStatus() === AuthStatus.checking ) return false;
  router.navigateByUrl('/auth/login')
  return false;
};
