import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingStaffComponent } from './loading-staff.component';

describe('LoadingStaffComponent', () => {
  let component: LoadingStaffComponent;
  let fixture: ComponentFixture<LoadingStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
