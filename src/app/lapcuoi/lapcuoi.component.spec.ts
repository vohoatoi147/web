import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LapcuoiComponent } from './lapcuoi.component';

describe('LapcuoiComponent', () => {
  let component: LapcuoiComponent;
  let fixture: ComponentFixture<LapcuoiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LapcuoiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LapcuoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
