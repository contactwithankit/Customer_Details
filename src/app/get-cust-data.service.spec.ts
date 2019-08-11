import { TestBed } from '@angular/core/testing';

import { GetCustDataService } from './get-cust-data.service';

describe('GetCustDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetCustDataService = TestBed.get(GetCustDataService);
    expect(service).toBeTruthy();
  });
});
