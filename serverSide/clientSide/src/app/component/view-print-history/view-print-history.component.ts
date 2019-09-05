import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { PrintHistory } from 'src/app/model/PrintHistory';

@Component({
  selector: 'app-view-print-history',
  templateUrl: './view-print-history.component.html',
  styleUrls: ['./view-print-history.component.css']
})
export class ViewPrintHistoryComponent implements OnInit {

  displayedColumns: string[] = ['datePrint', 'sumOfPages', 'isColorFull', 'printerName','costPrint'];
  printHistories:PrintHistory[];

  constructor(private userServ: UserService) { }

  ngOnInit() {    
    this.userServ.getPrinytHistory().subscribe(res => {
      this.userServ.printHistories = res;
      this.printHistories=res;
    }, err => {
      console.log("GetPrintHistory isn't work")
    })
  }
}