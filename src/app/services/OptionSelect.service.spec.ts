/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OptionSelectService } from './OptionSelect.service';

describe('Service: OptionSelect', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OptionSelectService]
    });
  });

  it('should ...', inject([OptionSelectService], (service: OptionSelectService) => {
    expect(service).toBeTruthy();
  }));
});
