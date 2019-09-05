import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/services/user.service';
import { NodeCompatibleEventEmitter } from 'rxjs/internal/observable/fromEvent';
import { Deposit } from 'src/app/model/Deposit';
import { PrintHistory } from 'src/app/model/PrintHistory';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  user:User;
  userBalance:number;   
  deposit:Deposit=new Deposit();
  inputDeposit:number;

  constructor(private userServ:UserService,private toastr: ToastrService) { }

  ngOnInit() {    
    this.getBalance();  
  }

  getBalance(){ 
    this.user= this.userServ.user;
    this.userServ.getBalanceByUser(this.user).subscribe(res=>{
    this.userBalance=res    
    },err=>{
    console.log("GetBalance isn't work")
    }); 
  }

  onLoad(){    
    this.deposit.userId=this.user.userId;
    //this.deposit.depositDate=Date.now();????????????????????
    this.userServ.newDeposit(this.deposit).subscribe(res=>{
      this.userBalance+=res;
      this.inputDeposit=null;
      this.deposit.depositAmount=null;
      //this.toastr.success('Hello world!', 'Toastr fun!');
    },err=>{
    });
  }  
}