import { TestBed } from '@angular/core/testing';

import { CheveuxService } from './cheveux.service';

describe('CheveuxService', () => {
  let service: CheveuxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheveuxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
