import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LinkerService } from './linker.service';

export const secondauthguardGuard: CanActivateFn = (route, state) => {
  var linker = inject(LinkerService);
  linker.ngOnInit();

  if (localStorage.getItem('Phone') != null && localStorage.getItem('Password') != null)
  {
    var router = inject(Router);

    router.navigate(['']);
    return false;
  }

  return true;
};
