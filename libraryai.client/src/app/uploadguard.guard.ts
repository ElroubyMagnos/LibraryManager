import { CanActivateFn, Router } from '@angular/router';
import { LinkerService } from './linker.service';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

export const uploadguardGuard: CanActivateFn = async (route, state) => {
  var linker = inject(LinkerService);
  var http = inject(HttpClient);
  var router = inject(Router);

  var ID = await firstValueFrom(http.get<number>(`${linker.backend}/Base/GetIDFromPhone/${localStorage.getItem('Phone')}`));
  
  if (linker.CurrentRequest != undefined && linker.CurrentRequest.ownerId === ID)
    return true;
  
  router.navigate(['']);

  return false;
};
