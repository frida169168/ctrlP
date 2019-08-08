import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Sheet } from 'src/app/model/Sheet';
import { SheetService } from 'src/app/services/sheet.service';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-add-sheet',
  templateUrl: './add-sheet.component.html',
  styleUrls: ['./add-sheet.component.css']
})
export class AddSheetComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddSheetComponent>,@Inject(MAT_DIALOG_DATA) public data: Sheet,private sheetService:SheetService ) { 
    console.log(data)
  }

  ngOnInit() {
  }
  mySheet:Sheet=this.data;

  closeDialog():void{
    this.dialogRef.close();
  }
  addSheet():void{
  this.sheetService.addSheeet(this.data).subscribe(res=>{alert("add בהצלחה")},err=>{"נכשל"});
}}
