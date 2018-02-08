import { TestBed, inject } from '@angular/core/testing';

import { PackageService } from './Package.service';

describe('PackageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PackageService]
    });
  });

  it('should be created', inject([PackageService], (service: PackageService) => {
    expect(service).toBeTruthy();
  }));
});
