import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/services/user.service';
import { NodeCompatibleEventEmitter } from 'rxjs/internal/observable/fromEvent';
import { Deposit } from 'src/app/model/Deposit';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
  user:User;
  userBalance:number;
  @Input()
  deposit:Deposit=new Deposit();
  constructor(private userSer:UserService) { 

  }

  ngOnInit() {
    this.user=  this.userSer.user;
    this.userSer.getBalanceByUser(this.user).subscribe(res=>{
      this.userBalance=res;
    },err=>{
      this.userBalance=0//
    }); 
  }

  onLoad(){    
    this.deposit.userId=this.user.userId;
    //this.deposit.depositDate=Date.now();????????????????????
    this.userSer.newDeposit(this.deposit).subscribe(res=>{
      alert("Is Loading")
    },err=>{
      alert("error")
    });
  }
}