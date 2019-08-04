import { BrowserModule } from '@angular/platform-browser';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule} from  '@angular/common/http'
import { LoadingComponent } from './component/loading/loading.component';
import { UserService } from './services/user.service';
import { AppRoutingModule }from './app-routing/app-routing.module';
import { StaffComponent } from './component/staff/staff.component';
import { SheetSettingComponent } from './component/sheet-setting/sheet-setting.component';
import { LoadingStaffComponent } from './component/loading-staff/loading-staff.component';
import { MatFormFieldModule, MatInputModule, MatDialogModule, MatSelectModule, MatListOption, MatListModule, MatPaginatorModule, MatTableModule, MatButtonModule, MatIconModule, MatCheckboxModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { SheetService } from './services/sheet.service';
import { SpecService } from './services/spec.service';
import { SetStaffPaswordComponent } from './component/set-staff-pasword/set-staff-pasword.component';
import { EditComponent } from './component/edit/edit.component';
import { StudentPipe } from './student.pipe';
import { ViewPrintHistoryComponent } from './component/view-print-history/view-print-history.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoadingComponent,
    StaffComponent,
    SheetSettingComponent,
    LoadingStaffComponent,
    SetStaffPaswordComponent ,
    EditComponent,
    StudentPipe,
    ViewPrintHistoryComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSelectModule,
    MatListModule,
    MatPaginatorModule,
    MatListModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatAutocompleteModule
  ],
  entryComponents:[
  EditComponent
  ],
  providers: [UserService,SheetService,SpecService],
  bootstrap: [AppComponent]
})
export class AppModule { }
