import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { L4Component } from './l4.component';

describe('L4Component', () => {
  let component: L4Component;
  let fixture: ComponentFixture<L4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ L4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(L4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
