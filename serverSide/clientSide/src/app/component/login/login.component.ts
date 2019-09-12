import { Component, OnInit, Input } from '@angular/core';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/services/user.service';
import { Router, NavigationExtras } from '@angular/router';
import { eType } from 'src/app/model/eType';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();

  constructor(private userService: UserService, private route: Router,
     iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
      iconRegistry.addSvgIcon(
        'avatar',
        sanitizer.bypassSecurityTrustResourceUrl('/src/app/Images/avatar.svg'));    
  }  

  ngOnInit() {
  }

  onLogin() {
    this.userService.getUser(this.user).subscribe(res => {
      this.userService.user = res;

      if (res.entityTypeId == eType.staff) {
        this.route.navigate(['/loadingStaff']);
      }
      else if (res.entityTypeId == 2) {
      }
      else {
        this.route.navigate(['/loading']);
      }
    }, err => {
        this.user.userName=null;  
        this.user.userTz=null;    
        alert("משתמש לא קיים!!!!")   
    })

  }
}