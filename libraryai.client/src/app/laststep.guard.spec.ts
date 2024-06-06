import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { laststepGuard } from './laststep.guard';

describe('laststepGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => laststepGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
