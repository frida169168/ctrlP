import { Component, OnInit, inject, Injectable, ViewChild } from '@angular/core';
import { FormControl,ReactiveFormsModule} from '@angular/forms';
import { Observable} from 'rxjs';
import { map, startWith} from 'rxjs/operators';
import { SpecService } from 'src/app/services/spec.service';
import { Specialization } from 'src/app/model/Specialization';
import { HttpBackend } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/model/User';
import { PageEvent, MatPaginator } from '@angular/material';
import { Type, ElementSchemaRegistry } from '@angular/compiler';
import { eType } from 'src/app/model/eType';
import { MatTableDataSource} from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-loading-staff',
  templateUrl: './loading-staff.component.html',
  styleUrls: ['./loading-staff.component.css']
})

export class LoadingStaffComponent implements OnInit {

  myControl = new FormControl();

  onlyStudentsFromUsers: User[]=[];
  specializations: Specialization[] = [] ;  
  userToSpecs:any[]=[
    {userId:5,specId:1},
    {userId:7,specId:2},
    {userId:8,specId:3},
    {userId:5,specId:2}
  ];

  filteredStudents: Observable<User[]>;

  displayedColumns: string[] = ['select','name'];
  dataSource = new MatTableDataSource<User>(this.onlyStudentsFromUsers);
  selection = new SelectionModel<User>(true, []); 
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private specServ:SpecService,private userServ:UserService) { } 

  ngOnInit() { 
    this.filteredStudents = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value :this.onlyStudentsFromUsers.values.name),
        map(name => name ? this._filter(name) : this.onlyStudentsFromUsers.slice())
      );

       this.getAllSpecializations();
       this.getAllUsers();
       this.dataSource.paginator = this.paginator;
  }

  // displayFn(user?: User): string | undefined {
  //   return user ? user.userName : undefined;
  // }

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

  getAllSpecializations(){
    this.specServ.getAllSpec().subscribe(res=>{ 
      for (const resValue of res){     
        this.specializations.push(resValue);
      }    
    },err=>{
    })
  }

  getAllUsers(){
    this.userServ.getStudents().subscribe(res=>{ 
      for (const resValue of res){     
        this.onlyStudentsFromUsers.push(resValue);
      }    
    },err=>{
    })
  } 
}