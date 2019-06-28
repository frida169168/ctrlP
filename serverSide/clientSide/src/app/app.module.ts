import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { FormsModule } from '@angular/forms'
import { HttpClientModule} from  '@angular/common/http'
import { LoadingComponent } from './component/loading/loading.component';
import { UserService } from './services/user.service';
import{ AppRoutingModule }from './app-routing/app-routing.module';
import { StaffComponent } from './component/staff/staff.component';
import { SheetSettingComponent } from './component/sheet-setting/sheet-setting.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoadingComponent,
    StaffComponent,
    SheetSettingComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
