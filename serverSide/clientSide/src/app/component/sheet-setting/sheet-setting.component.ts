import { Component, OnInit } from '@angular/core';
import { SheetService } from 'src/app/services/sheet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sheet-setting',
  templateUrl: './sheet-setting.component.html',
  styleUrls: ['./sheet-setting.component.css']
})
export class SheetSettingComponent implements OnInit {

  constructor(private sheetService:SheetService,private route:Router) { }

  ngOnInit() {
  }

}
