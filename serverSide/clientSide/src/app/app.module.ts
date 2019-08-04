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
import { MatFormFieldModule, MatInputModule, MatDialogModule, MatIconModule, MatCheckboxModule, MatSelectModule, MatTableModule, MatDatepickerModule, MatNativeDateModule, MatPaginatorModule, MatExpansionModule, MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { SheetService } from './services/sheet.service';
import { SpecService } from './services/spec.service';
import { SetStaffPaswordComponent } from './set-staff-pasword/set-staff-pasword.component';
import { EditComponent } from './component/edit/edit.component';
import { MatFileUploadModule } from 'angular-material-fileupload';
import { DeleteSheetComponent } from './component/delete-sheet/delete-sheet.component';
import { AddSheetComponent } from './component/add-sheet/add-sheet.component';

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
    DeleteSheetComponent,
    AddSheetComponent
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
    MatFileUploadModule,
    MatIconModule,    
    MatButtonModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatFormFieldModule,
     MatInputModule,
    MatTableModule,
    MatCheckboxModule,
     MatSelectModule,
     FormsModule,
     ReactiveFormsModule,
     MatDatepickerModule,
     MatNativeDateModule,
     MatIconModule,
     MatPaginatorModule,
     MatExpansionModule,
     MatTableModule
  ],
  entryComponents:[
  EditComponent,
  DeleteSheetComponent,
  AddSheetComponent
  ],
  providers: [UserService,SheetService,SpecService],
  bootstrap: [AppComponent]
})
export class AppModule { }
