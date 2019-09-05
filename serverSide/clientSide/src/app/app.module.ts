import { BrowserModule } from '@angular/platform-browser';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { LoadingComponent } from './component/loading/loading.component';
import { UserService } from './services/user.service';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { StaffComponent } from './component/staff/staff.component';
import { SheetSettingComponent } from './component/sheet-setting/sheet-setting.component';
import { LoadingStaffComponent } from './component/loading-staff/loading-staff.component';
import { MatFormFieldModule, MatInputModule, MatDialogModule, MatSelectModule, MatListOption, MatListModule, MatPaginatorModule, MatTableModule, MatButtonModule, MatIconModule, MatCheckboxModule, MatButtonToggleModule, MatMenuModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SheetService } from './services/sheet.service';
import { SpecService } from './services/spec.service';
import { SetStaffPaswordComponent } from './component/set-staff-pasword/set-staff-pasword.component';
import { EditComponent } from './component/edit/edit.component';
import { DepositListComponent } from './component/deposit-list/deposit-list.component';
import { DeleteSheetComponent } from './component/delete-sheet/delete-sheet.component';
import { AddSheetComponent } from './component/add-sheet/add-sheet.component';
import { ViewPrintHistoryComponent } from './component/view-print-history/view-print-history.component';
import { MatFileUploadModule } from 'mat-file-upload'
import { CommonModule } from '@angular/common';
 
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoadingComponent,
    StaffComponent,
    SheetSettingComponent,
    LoadingStaffComponent,
    SetStaffPaswordComponent,
    EditComponent,
    DepositListComponent,
    DeleteSheetComponent,
    AddSheetComponent,
    ViewPrintHistoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatPaginatorModule,
    MatMenuModule,
    MatFileUploadModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot() 
  ],
  entryComponents: [
    EditComponent,
    DeleteSheetComponent,
    AddSheetComponent
  ],
  providers: [UserService, SheetService, SpecService],
  bootstrap: [AppComponent]
})
export class AppModule { }
