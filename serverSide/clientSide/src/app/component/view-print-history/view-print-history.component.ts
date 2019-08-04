import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-view-print-history',
  templateUrl: './view-print-history.component.html',
  styleUrls: ['./view-print-history.component.css']
})
export class ViewPrintHistoryComponent implements OnInit { 

  displayedColumns: string[] = ['datePrint', 'sumOfPages', 'printerName', 'costPrint'];

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'prev-page',
        sanitizer.bypassSecurityTrustResourceUrl('../../images/baseline-navigate_next-24px.svg'));   
        // '../../images/baseline-navigate_next-24px.svg');   
  }

  ngOnInit() {
  }
}
