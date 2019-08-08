import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSheetComponent } from './delete-sheet.component';

describe('DeleteSheetComponent', () => {
  let component: DeleteSheetComponent;
  let fixture: ComponentFixture<DeleteSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
