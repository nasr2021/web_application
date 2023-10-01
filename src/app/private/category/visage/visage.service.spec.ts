import { TestBed } from '@angular/core/testing';

import { VisageService } from './visage.service';

describe('VisageService', () => {
  let service: VisageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
