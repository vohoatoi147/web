import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LapcuoigiohangComponent } from './lapcuoigiohang.component';

describe('LapcuoigiohangComponent', () => {
  let component: LapcuoigiohangComponent;
  let fixture: ComponentFixture<LapcuoigiohangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LapcuoigiohangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LapcuoigiohangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
