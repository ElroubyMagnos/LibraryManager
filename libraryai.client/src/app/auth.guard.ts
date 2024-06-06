import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { LinkerService } from './linker.service';

export const authGuard: CanActivateFn = async (route: any, state: any) => {
  var linker = inject(LinkerService);
  linker.ngOnInit();

  if (localStorage.getItem('Phone') != null && localStorage.getItem('Password') != null)
    return true;
  
  var router = inject(Router);

  router.navigate(['logouthome']);

  return false; 
};
