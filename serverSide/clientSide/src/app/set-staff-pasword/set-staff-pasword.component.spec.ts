import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetStaffPaswordComponent } from './set-staff-pasword.component';

describe('SetStaffPaswordComponent', () => {
  let component: SetStaffPaswordComponent;
  let fixture: ComponentFixture<SetStaffPaswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetStaffPaswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetStaffPaswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
