import { TestBed } from '@angular/core/testing';

import { SpecService } from './spec.service';

describe('SpecService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpecService = TestBed.get(SpecService);
    expect(service).toBeTruthy();
  });
});
