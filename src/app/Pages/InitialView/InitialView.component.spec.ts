/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InitialViewComponent } from './InitialView.component';

describe('InitialViewComponent', () => {
  let component: InitialViewComponent;
  let fixture: ComponentFixture<InitialViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitialViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
