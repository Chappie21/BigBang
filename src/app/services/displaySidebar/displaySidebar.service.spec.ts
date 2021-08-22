/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DisplaySidebarService } from './displaySidebar.service';

describe('Service: DisplaySidebar', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DisplaySidebarService]
    });
  });

  it('should ...', inject([DisplaySidebarService], (service: DisplaySidebarService) => {
    expect(service).toBeTruthy();
  }));
});
