import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSheetComponent } from './add-sheet.component';

describe('AddSheetComponent', () => {
  let component: AddSheetComponent;
  let fixture: ComponentFixture<AddSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
