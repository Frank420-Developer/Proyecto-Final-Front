import { TestBed } from '@angular/core/testing';

import { GetContratsService } from './get-contrats.service';

describe('GetContratsService', () => {
  let service: GetContratsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetContratsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
