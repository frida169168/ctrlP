import { Component, OnInit, inject, Injectable } from '@angular/core';
import { FormControl,ReactiveFormsModule} from '@angular/forms';
import { Observable} from 'rxjs';
import { map, startWith} from 'rxjs/operators';
import { SpecService } from 'src/app/services/spec.service';
import { Specialization } from 'src/app/model/Specialization';
import { HttpBackend } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-loading-staff',
  templateUrl: './loading-staff.component.html',
  styleUrls: ['./loading-staff.component.css']
})

export class LoadingStaffComponent implements OnInit {

  constructor(private specServ:SpecService,private userServ:UserService) { }   
  
  myControl = new FormControl(); 
  specs: Specialization[] = [] ;
  users:User[]=[];
  
  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.initSpec();
    this.initUser();
  }

  initSpec(){
    this.getAllSpec();
    this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(value => (this._filterSpecs(value) as Specialization[]).map(s=>s.specName))
    );
  }

  initUser(){
    this.getAllUser();
    this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(value => (this._filterUsersName(value) as User[]).map(s=>s.userName))
    );
  }

  private _filterSpecs(value: string): Specialization[] {
    const filterValue = value.toLowerCase();    
    return this.specs.filter(option => option.specName.toLowerCase().includes(filterValue))
  } 
  private _filterUsersName(value: string): User[] {
    const filterValue = value.toLowerCase();    
    return this.users.filter(option => option.userName.toLowerCase().includes(filterValue))
  } 

  getAllSpec(){
    this.specServ.getAllSpec().subscribe(res=>{ 
      for (const resValue of res){     
        this.specs.push(resValue);
      }      
      alert(":)good spec")     
    },err=>{
      alert(":(spec")       
    })
  }

  getAllUser(){
    this.userServ.getStudents().subscribe(res=>{ 
      for (const resValue of res){     
        this.users.push(resValue);
      }    
      alert(":)good user")      
    },err=>{
      alert(":(user")       
    })
  }  
}