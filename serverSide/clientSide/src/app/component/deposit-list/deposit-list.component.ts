import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Deposit } from 'src/app/model/Deposit';

@Component({
  selector: 'app-deposit-list',
  templateUrl: './deposit-list.component.html',
  styleUrls: ['./deposit-list.component.css']
})
export class DepositListComponent implements OnInit {

  constructor(private userService:UserService) { }

  public depositList:Deposit[];
  ngOnInit() {
    this.userService.getDepositsForUser().subscribe(res=>{
      res.forEach(element => {
        this.depositList.push(element);
      });

    },err=>{
      alert(";(")
    })
  }

  deleteDeposit(){
    
  }
}
