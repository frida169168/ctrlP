import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPrintHistoryComponent } from './view-print-history.component';

describe('ViewPrintHistoryComponent', () => {
  let component: ViewPrintHistoryComponent;
  let fixture: ComponentFixture<ViewPrintHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPrintHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPrintHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
