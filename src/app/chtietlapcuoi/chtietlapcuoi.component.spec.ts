import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChtietlapcuoiComponent } from './chtietlapcuoi.component';

describe('ChtietlapcuoiComponent', () => {
  let component: ChtietlapcuoiComponent;
  let fixture: ComponentFixture<ChtietlapcuoiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChtietlapcuoiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChtietlapcuoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
