import { Component, OnInit } from '@angular/core';
import { DepositService } from 'src/app/services/deposit.service';
import { Deposit } from 'src/app/model/Deposit';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-deposit-list',
  templateUrl: './deposit-list.component.html',
  styleUrls: ['./deposit-list.component.css']
})
export class DepositListComponent implements OnInit {

  public depositList: Deposit[] = [];
  date: number;

  displayedColumns: string[] = ['select', 'date', 'tz', 'name', 'amount', 'deleteIcon'];
  selection = new SelectionModel<Deposit>(true, []);
  dataSource = new MatTableDataSource<Deposit>(this.depositList);
  constructor(private depositService: DepositService) { }

  ngOnInit() {
    this.depositService.getDeposits().subscribe(res => {
      this.depositList = res;
      console.log(this.depositList);
    }, err => {
      alert("depositList dosen't work")
    })
  }

  deleteDeposit(deposit) {
    this.depositService.deleteDeposit(deposit).subscribe(res => {
      const index: number = this.depositList.indexOf(deposit);
      if (index !== -1) {
        this.depositList.splice(index, 1);//לא מראה שמוחק, האם צריך לעשות קריאה נוספת?
      }
      alert("נמחק בהצלחה")
    }, err => { alert("נכשל") });
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  checkboxLabel(row?: Deposit): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.depositId + 1}`;
  }
}
