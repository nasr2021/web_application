import { TestBed } from '@angular/core/testing';

import { MainsetonglesService } from './mainsetongles.service';

describe('MainsetonglesService', () => {
  let service: MainsetonglesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainsetonglesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
