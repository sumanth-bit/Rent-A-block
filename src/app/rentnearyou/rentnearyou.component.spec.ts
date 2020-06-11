import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentnearyouComponent } from './rentnearyou.component';

describe('RentnearyouComponent', () => {
  let component: RentnearyouComponent;
  let fixture: ComponentFixture<RentnearyouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentnearyouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentnearyouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
