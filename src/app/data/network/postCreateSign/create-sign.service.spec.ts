import { TestBed } from '@angular/core/testing';

import { CreateSignService } from './create-sign.service';

describe('CreateSignService', () => {
  let service: CreateSignService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateSignService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
