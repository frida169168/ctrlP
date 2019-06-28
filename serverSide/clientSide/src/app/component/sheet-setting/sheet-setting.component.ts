import { Component, OnInit } from '@angular/core';
import { SheetService } from 'src/app/services/sheet.service';
import { Router } from '@angular/router';
import { sheet } from 'src/app/model/sheet';

@Component({
  selector: 'app-sheet-setting',
  templateUrl: './sheet-setting.component.html',
  styleUrls: ['./sheet-setting.component.css']
})
export class SheetSettingComponent implements OnInit {

  constructor(private sheetService:SheetService,private route:Router) { }
  public sheets :sheet[]=[];
  ngOnInit() {
    this.showSheets();
   
  }
  toS(s:sheet){
    return s.nameSize+"sdfdsfdsf";
  }
  showSheets(){
    this.sheetService.getSheets().subscribe(res=>{
      alert("sucsess");
      debugger;
      for (const resValue of res) {
     
        this.sheets.push(resValue);
      }
      debugger;
     this.sheets=res;
  
     debugger;
    },err=>{
      alert("error");
    })
  }
}
