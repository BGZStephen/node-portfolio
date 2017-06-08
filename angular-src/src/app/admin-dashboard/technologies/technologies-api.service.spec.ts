import { TestBed, inject } from '@angular/core/testing';

import { TechnologiesApiService } from './technologies-api.service';

describe('TechnologiesApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TechnologiesApiService]
    });
  });

  it('should ...', inject([TechnologiesApiService], (service: TechnologiesApiService) => {
    expect(service).toBeTruthy();
  }));
});
