import { TestBed } from '@angular/core/testing';

import { YourcardService } from './yourcard.service';

describe('YourcardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YourcardService = TestBed.get(YourcardService);
    expect(service).toBeTruthy();
  });
});
