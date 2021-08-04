/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RetoCardComponent } from './RetoCard.component';

describe('RetoCardComponent', () => {
  let component: RetoCardComponent;
  let fixture: ComponentFixture<RetoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
