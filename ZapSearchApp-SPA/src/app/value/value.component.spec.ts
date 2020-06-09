/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { EmployeeService } from './value.service';

import { ValueComponent } from './value.component';

describe('ValueComponent', () => {
  let component: ValueComponent;
  let fixture: ComponentFixture<ValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ ValueComponent],
      providers: [ EmployeeService ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Value component should create', () => {
    expect(component).toBeTruthy();
  });
});
