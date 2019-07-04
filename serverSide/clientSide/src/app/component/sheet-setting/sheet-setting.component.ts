import { Component, OnInit ,Inject} from '@angular/core';
import { SheetService } from 'src/app/services/sheet.service';
import { Router } from '@angular/router';
import { sheet } from 'src/app/model/sheet';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EditComponent } from '../edit/edit.component'
export interface DialogData {
  sizeName: string;
  priceColorFull: number;
  priceBlackWhite:number;
}
@Component({
  selector: 'app-sheet-setting',
  templateUrl: './sheet-setting.component.html',
  styleUrls: ['./sheet-setting.component.css']
})
export class SheetSettingComponent implements OnInit {

  constructor(private sheetService:SheetService,private route:Router,public dialog: MatDialog) { }
  public sheets :sheet[]=[];
  public sheet:sheet;
 

  ngOnInit() {
    this.showSheets();
   
  }
 
  showSheets(){
    this.sheetService.getSheets().subscribe(res=>{
      alert("sucsess");
     
      for (const resValue of res) {
        this.sheets.push(resValue);
      }
    },err=>{
      alert("error");
    })
  }

  deleteSheet(sheetId){
   this.sheetService.deleteSheet(sheetId).subscribe(res=>{ alert("נמחק בהצלחה")}),err=>{  alert("לא נמחק")}
  }
openDialog(sheet): void {
 
  const dialogRef = this.dialog.open(EditComponent, {
    width: '250px',height:'250px',
    data: {name: sheet.SizeOfPage.nameSize, priceBlackWhite: sheet.price.priceBlackWhite
      ,priceColorFull:sheet.price.priceColorFull}
    // data: {sheet: this.sheet}
  });
  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    this.sheet = result;//???????
  });
}}