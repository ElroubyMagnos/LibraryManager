import { CanActivateFn, Router } from '@angular/router';
import { LinkerService } from './linker.service';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

export const laststepGuard: CanActivateFn = async (route, state) => {
  var linker = inject(LinkerService);
  var http = inject(HttpClient);
  var router = inject(Router);

  var Await = await firstValueFrom(http.get<boolean>(`${linker.backend}/Base/IsRequestValid/${linker.CurrentRequest.id}/`));

  if (Await)
  {
    return true;
  }
  else
  {
    router.navigate(['']);
    return false;
  }
};
