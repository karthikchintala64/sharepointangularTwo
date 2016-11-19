/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SuperstoreComponent } from './superstore.component';

describe('SuperstoreComponent', () => {
  let component: SuperstoreComponent;
  let fixture: ComponentFixture<SuperstoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperstoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperstoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
