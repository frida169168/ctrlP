import { Component, OnInit ,Inject} from '@angular/core';
import { SheetService } from 'src/app/services/sheet.service';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EditComponent } from '../edit/edit.component'
import { min } from 'rxjs/operators';
import { b, getRenderedText } from '@angular/core/src/render3';
import { getRandomString } from 'selenium-webdriver/safari';
import { getHtmlTagDefinition } from '@angular/compiler';
import { MAT_SORT_HEADER_INTL_PROVIDER_FACTORY, MatDatepickerContent } from '@angular/material';
import { DeleteSheetComponent } from '../delete-sheet/delete-sheet.component';
import { Sheet } from 'src/app/model/Sheet';
import { AddSheetComponent } from '../add-sheet/add-sheet.component';
@Component({
  selector: 'app-sheet-setting',
  templateUrl: './sheet-setting.component.html',
  styleUrls: ['./sheet-setting.component.css']
})
export class SheetSettingComponent implements OnInit {
  constructor(private sheetService:SheetService,private route:Router,public dialog: MatDialog,private SheetService:SheetService) { }
  public sheets :Sheet[]=[];
  ngOnInit() {
 
    this.showSheets();
 
  }
  showSheets(){
    this.sheetService.getSheets().subscribe(res=>{
      this.sheets=res;
    },err=>{
      debugger
      alert("error");
    })
  }
  deleteSheet(sheetId){
   this.sheetService.deleteSheet(sheetId).subscribe(res=>{ alert("נמחק בהצלחה")}),err=>{  alert("לא נמחק")}
  }
openDialog(sheet:Sheet): void {
  const dialogRef = this.dialog.open(EditComponent, {
    width: '350px',height:'350px',
    data:{
      price:
      {
        priceId:sheet.price.priceId,
        priceBlackWhite:sheet.price.priceBlackWhite,
        priceColorFull:sheet.price.priceColorFull,
      },
      SizeOfPage:
      {sizeName:sheet.SizeOfPage.sizeName,
        sizeId:sheet.SizeOfPage.sizeId
      }
    }
  });
  dialogRef.afterClosed().subscribe(result => {
    if(result && result.isOK){
     this.SheetService.EditSheet(result.myData).subscribe(x=>
      {
      this.showSheets();
      }
     );
    console.log('The dialog was closed',result.myData);
   }
  });
}
dialogDelete(sheetId:Number) {
  // this.id = schoolId;
  const dialogRef = this.dialog.open(DeleteSheetComponent, {
    data: {sheetUd:sheetId}
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result === 1) {
      this.sheetService.deleteSheet(sheetId).subscribe(res=>{this.showSheets()});
    }
    this.showSheets();
  });
}   
dialogAdd(sheet:Sheet):void{
  const dialogRef=this.dialog.open(AddSheetComponent,
    {    width: '350px',height:'350px',
    data:{
      price:
      {
        priceId:0,
        priceBlackWhite:"",
        priceColorFull:"",
      },
      SizeOfPage:
      {
        sizeName:"",
        sizeId:0,
      }
}})
    dialogRef.afterClosed().subscribe(result => {
 
      if (result) {
       
        this.showSheets();
      }
    });
}
}
