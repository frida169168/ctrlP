import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetSettingComponent } from './sheet-setting.component';

describe('SheetSettingComponent', () => {
  let component: SheetSettingComponent;
  let fixture: ComponentFixture<SheetSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheetSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
