import { TestBed } from '@angular/core/testing';

import { AccountUpdateService } from './account-update.service';

describe('AccountUpdateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccountUpdateService = TestBed.get(AccountUpdateService);
    expect(service).toBeTruthy();
  });
});
