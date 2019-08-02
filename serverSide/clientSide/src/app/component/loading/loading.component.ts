import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/services/user.service';
import { NodeCompatibleEventEmitter } from 'rxjs/internal/observable/fromEvent';
import { Deposit } from 'src/app/model/Deposit';
import { PrintHistory } from 'src/app/model/PrintHistory';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
  user:User;
  userBalance:number;
  printHistory:PrintHistory[];
  @Input()
  deposit:Deposit=new Deposit();
  constructor(private userSer:UserService, private router: Router) { 

  }

  ngOnInit() {
    this.getBalance();  
  }

  getBalance(){ 
    this.user= this.userSer.user;
    this.userSer.getBalanceByUser(this.user).subscribe(res=>{
    this.userBalance=res;
    console.log(this.userBalance)
    },err=>{
    alert("blance isnt work :(")
    }); 
  }

  onLoad(){    
    this.deposit.userId=this.user.userId;
    //this.deposit.depositDate=Date.now();????????????????????
    this.userSer.newDeposit(this.deposit).subscribe(res=>{
      alert("Is Loading")
      this.userBalance+=res;
    },err=>{
      alert("error")
    });
  }

  PrintHostory(){
    this.userSer.getPrinytHistory(this.user).subscribe(res=>{
      this.printHistory=res;      
    },err=>{});
    this.router.navigate(['viewPrintHistory',this.printHistory]);
  }  
}