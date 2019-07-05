import { Component, OnInit, Input } from '@angular/core';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/services/user.service';
import{Router, NavigationExtras}from '@angular/router'
<<<<<<< HEAD
=======
import { eType } from 'src/app/model/eType';


>>>>>>> a5991d401dbeb421095e988caae21634ccd515f3
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService,private route:Router) { }
  @Input()
  user:User=new User();
  
  ngOnInit() {
  }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 

  onLogin(){
    this.userService.getUserByTz(this.user).subscribe(res=>{
      this.userService.user=res;

      if(res.entityTypeId==eType.staff){
        this.route.navigate(['/staff']);
      }
      else if(res.entityTypeId==2){
      }
      else{ 
        this.route.navigate(['/loading']);
      }
        },err=>{
          alert("משתמש אינו קיים")         
    })
      
  } 
}