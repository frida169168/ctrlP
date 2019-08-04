import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoadingComponent } from '../component/loading/loading.component';
import { LoginComponent } from '../component/login/login.component';
import { StaffComponent } from '../component/staff/staff.component';
import { SheetSettingComponent } from 'src/app/component/sheet-setting/sheet-setting.component';
import { LoadingStaffComponent } from '../component/loading-staff/loading-staff.component';
import { SetStaffPaswordComponent } from '../set-staff-pasword/set-staff-pasword.component';


const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'loading', component: LoadingComponent },  
  { path: 'staff', component:  StaffComponent },
  { path: 'sheetSetting', component:  SheetSettingComponent },
  { path: 'loadingStaff', component:LoadingStaffComponent},
  { path:  'SetStaffPasword',component:SetStaffPaswordComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
   exports: [RouterModule]
  , declarations: []
})

export class AppRoutingModule { }
