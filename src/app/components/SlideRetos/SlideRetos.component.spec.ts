/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SlideRetosComponent } from './SlideRetos.component';

describe('SlideRetosComponent', () => {
  let component: SlideRetosComponent;
  let fixture: ComponentFixture<SlideRetosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideRetosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideRetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
