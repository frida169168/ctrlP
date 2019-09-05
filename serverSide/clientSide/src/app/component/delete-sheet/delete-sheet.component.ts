import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {Sheet} from 'src/app/model/Sheet'
import { SheetService } from '../../services/sheet.service';

@Component({
  selector: 'app-delete-sheet',
  templateUrl: './delete-sheet.component.html',
  styleUrls: ['./delete-sheet.component.css']
})
export class DeleteSheetComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteSheetComponent>,@Inject(MAT_DIALOG_DATA) public data: number,private sheetService:SheetService ) { }

  ngOnInit() {
    console.log("lll"+this.data);
  }
  onClickCancel():void{
    this.dialogRef.close();
  }
  onClickDelete(sheetId:Number):void{
  this.sheetService.deleteSheet(sheetId).subscribe(res=>{alert("נמחק בהצלחה")},err=>{"נכשל"});
}
}

