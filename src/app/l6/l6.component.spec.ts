import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { L6Component } from './l6.component';

describe('L6Component', () => {
  let component: L6Component;
  let fixture: ComponentFixture<L6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ L6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(L6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
