import { Component, OnInit, inject, Injectable, ViewChild } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable, observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { SpecService } from 'src/app/services/spec.service';
import { Specialization } from 'src/app/model/Specialization';
import { HttpBackend } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/model/User';
import { PageEvent, MatPaginator } from '@angular/material';
import { Type, ElementSchemaRegistry } from '@angular/compiler';
import { eType } from 'src/app/model/eType';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { StudentWithSpecs } from 'src/app/model/StudentWithSpecs';
import { Deposit } from 'src/app/model/Deposit';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loading-staff',
  templateUrl: './loading-staff.component.html',
  styleUrls: ['./loading-staff.component.css']
})

export class LoadingStaffComponent implements OnInit {

  myControl = new FormControl();
  multiSpec = new FormControl();
  specSearch: number[];
  searchTxt: string;
  deposits:Deposit[]=[];
  studentsWithSpecs: StudentWithSpecs[] = [];
  depositAmount:number;
  deposit:Deposit;
  filteredStudents: Observable<StudentWithSpecs[]>;

  displayedColumns: string[] = ['select', 'name', 'specs','balance'];
  dataSource;
  specializations: Specialization[] = [];
  selection = new SelectionModel<StudentWithSpecs>(true, []);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private specServ: SpecService, private userServ: UserService,private route:Router) { }

  ngOnInit() {
    this.getStudents();
    this.getSpecialization();

    this.filteredStudents = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value['userName']),
        map(name => name ? this._filter(name) : this.studentsWithSpecs.slice())
      );
  }

  filterData() {
    console.log('this.multiSpec.value', this.multiSpec.value)
    var value = this.studentsWithSpecs;
    if (value && this.searchTxt != '' && this.searchTxt != null) {
      value = value.filter(f => f.userName.indexOf(this.searchTxt) >= 0);
    }
    if (value && this.multiSpec.value != null && this.multiSpec.value.length > 0) {
      value = value.filter((f => {
        var exist = false;
        this.multiSpec.value.forEach(s => {
          if (f.specs.find(d => d.specId == s)) {
            exist = true;
          }

        });
        if (exist) {
          return f;
        }
      }
      ));
    }
    this.dataSource = new MatTableDataSource<StudentWithSpecs>(value);
    this.dataSource.paginator = this.paginator;
  }


  listToString(arr: any[]) {
    var tmp = arr.map(m => m.specName);
    return tmp.join();
  }

  displayFn(user?: StudentWithSpecs): string | undefined {
    return user ? user.userName : undefined;
  }

  private _filter(name: string): StudentWithSpecs[] {
    const filterValue = name.toLowerCase();

    return this.studentsWithSpecs.filter(option => option.userName.toLowerCase().indexOf(filterValue) === 0);
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

  checkboxLabel(row?: StudentWithSpecs): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.userId + 1}`;
  }

  getSpecialization() {
    this.specServ.getAllSpec().subscribe(res => {
      this.specializations = res;
    }, err => {
    })
  }
  getStudents() {
    this.userServ.getStudentsWithSpecs().subscribe(res => {
      this.studentsWithSpecs = res;
      this.dataSource = new MatTableDataSource<StudentWithSpecs>(this.studentsWithSpecs);
      this.dataSource.paginator = this.paginator;
    }, err => {
    })
  }
  onCharging() {
    this.selection.selected.forEach(element => {
      this.deposit=new Deposit;
      this.deposit.userId=element.userId;
      this.deposit.depositAmount=this.depositAmount;
      this.deposits.push(this.deposit);
      element.balance+=this.depositAmount;           
    });;
   this.userServ.depositForStudents(this.deposits).subscribe(res=>{alert("נטען בהצלחה")},err=>{})
   this.searchTxt=null;
   this.specSearch=null;
   this.depositAmount=null;
   this.selection.clear();
  }
  buttonState(){
    return this.selection.selected.length==0;
  }
}