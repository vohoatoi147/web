import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { L5Component } from './l5.component';

describe('L5Component', () => {
  let component: L5Component;
  let fixture: ComponentFixture<L5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ L5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(L5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
