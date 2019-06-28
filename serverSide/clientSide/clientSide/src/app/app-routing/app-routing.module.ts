import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoadingComponent } from '../component/loading/loading.component';
import { LoginComponent } from '../component/login/login.component';
import { StaffComponent } from '../component/staff/staff.component';
import { SheetSettingComponent } from 'src/app/component/sheet-setting/sheet-setting.component';

const appRoutes: Routes = [
  { path: '', component: StaffComponent },//
  { path: 'loading', component: LoadingComponent },  
  { path: 'staff', component:  StaffComponent },
  { path: 'sheetSetting', component:  SheetSettingComponent }
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
