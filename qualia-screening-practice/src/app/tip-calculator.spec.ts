import { TestBed } from '@angular/core/testing';

import { TipCalculator } from './tip-calculator';

describe('TipCalculator', () => {
  let service: TipCalculator;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipCalculator);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
