import { CanActivateFn, Router } from '@angular/router';
import { Data } from '../services/data/data';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  

  const dataService = inject(Data);
  const router = inject(Router);
  
  let token : string = dataService.getLocalStorage('token');
   if(token){
    return true;
   } else{
    router.navigate(['/login']);
    return false;
   }
};
