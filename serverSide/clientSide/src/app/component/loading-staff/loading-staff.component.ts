import { Component, OnInit, inject, Injectable, ViewChild } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
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

@Component({
  selector: 'app-loading-staff',
  templateUrl: './loading-staff.component.html',
  styleUrls: ['./loading-staff.component.css']
})

export class LoadingStaffComponent implements OnInit {

  myControl = new FormControl();

  onlyStudentsFromUsers: User[] = [
    { userId: 1, userTz: "31", userName: "frida", entityTypeId: eType.student },
    { userId: 2, userTz: "31", userName: "racheli", entityTypeId: eType.student },
    { userId: 3, userTz: "31", userName: "sari g", entityTypeId: eType.student },
    { userId: 4, userTz: "31", userName: "malki", entityTypeId: eType.student },
    { userId: 5, userTz: "31", userName: "sari k", entityTypeId: eType.student },
    { userId: 6, userTz: "31", userName: "yafi", entityTypeId: eType.student },
    { userId: 7, userTz: "31", userName: "tamar", entityTypeId: eType.student },
    { userId: 8, userTz: "31", userName: "esty", entityTypeId: eType.student }
  ];
  specializations: Specialization[] = [
    { specId: 1, specName: "programer", specKindId: 1 },
    { specId: 2, specName: "grafica", specKindId: 1 },
    { specId: 3, specName: "english", specKindId: 1 },
    { specId: 4, specName: "math", specKindId: 1 },

  ];
  userToSpecs: any[] = [
    { userId: 1, specId: 1 },
    { userId: 1, specId: 2 },
    { userId: 2, specId: 1 },
    { userId: 3, specId: 2 },
    { userId: 4, specId: 2 },
    { userId: 5, specId: 3 },
    { userId: 6, specId: 3 },
    { userId: 7, specId: 4 },
    { userId: 8, specId: 4 }
  ];

  filteredStudents: Observable<User[]>;

  displayedColumns: string[] = ['select', 'name', 'specializationList'];
  dataSource = new MatTableDataSource<User>(this.onlyStudentsFromUsers);
  selection = new SelectionModel<User>(true, []);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private specServ: SpecService, private userServ: UserService) { }

  ngOnInit() {
    this.filteredStudents = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(value => typeof value === 'string' ? value : value['userName']),
      map(name => name ? this._filter(name) : this.onlyStudentsFromUsers.slice())
      );
      
      //this.getAllSpecializations();
      //this.getAllUsers();
      this.getSpecializationList();
      this.dataSource.paginator = this.paginator;
  }

  onSelectionChanged(value:any){
    debugger;
    

    
  }
  getSpecializationList() {
    this.onlyStudentsFromUsers.forEach((student) => {
      this.userToSpecs.forEach(userSpec => {
        if (userSpec.userId == student.userId) {
          if (!student['specializationList'])
            student['specializationList'] = [];
          student['specializationList'].push(this.specializations.find(f => f.specId == userSpec.specId));
        }
      })
    })

  }

  listToString(arr:any[]){
    var tmp=arr.map(m=>m.specName);
    return tmp.join();
  }

  displayFn(user?: User): string | undefined {
    return user ? user.userName : undefined;
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.onlyStudentsFromUsers.filter(option => option.userName.toLowerCase().indexOf(filterValue) === 0);
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

  checkboxLabel(row?: User): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    // return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  getAllSpecializations() {
    this.specServ.getAllSpec().subscribe(res => {
      for (const resValue of res) {
        this.specializations.push(resValue);
      }
    }, err => {
    })
  }

  getAllUsers() {
    this.userServ.getStudents().subscribe(res => {
      for (const resValue of res) {
        this.onlyStudentsFromUsers.push(resValue);
      }
    }, err => {
    })
  }
}