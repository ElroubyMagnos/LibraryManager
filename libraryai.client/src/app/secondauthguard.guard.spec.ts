import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { secondauthguardGuard } from './secondauthguard.guard';

describe('secondauthguardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => secondauthguardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
