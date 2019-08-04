import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Sheet } from 'src/app/model/Sheet';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  
  constructor( public dialogRef: MatDialogRef<EditComponent>,@Inject(MAT_DIALOG_DATA) public data: Sheet ) {
    console.log(data)

   }
  
  ngOnInit() {
  }
    
  }
