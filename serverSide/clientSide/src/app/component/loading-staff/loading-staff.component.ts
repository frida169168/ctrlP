import { Component, OnInit, inject, Injectable } from '@angular/core';
import { FormControl,ReactiveFormsModule} from '@angular/forms';
import { Observable} from 'rxjs';
import { map, startWith} from 'rxjs/operators';
import { SpecService } from 'src/app/services/spec.service';
import { Specialization } from 'src/app/model/Specialization';

@Component({
  selector: 'app-loading-staff',
  templateUrl: './loading-staff.component.html',
  styleUrls: ['./loading-staff.component.css']
})

export class LoadingStaffComponent implements OnInit {

  constructor(private specServ:SpecService) { }   
  
  myControl = new FormControl();

  options1: string[] = ['One', 'Two', 'Three'];
  options: Specialization[] = [
    {specId:1,specName:'a',specKindId:12},
    {specId:2,specName:'b',specKindId:13}
    ];

  filteredOptions: Observable<string[]>;

  ngOnInit() {
    // this.filteredOptions = this.myControl.valueChanges
    // .pipe(
    //   startWith(''),
    //   map(value => this._filter(value))
    // );
  }

  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();

  //   return this.options.filter(option => option.specName.toLowerCase().includes(filterValue));
  // } 

  // getAllSpec(){
  //   this.specServ.getAllSpec().subscribe(res=>{
  //     this.option.push(res);
  //   },err=>{
  //     this.option.push({ specId: 1,
  //       specName: 'ww',
  //       specKindId:12},
  //       {specId: 2,
  //         specName: 'xx',
  //         specKindId:13});
  //   })
  // }
}