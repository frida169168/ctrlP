import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import Swal from 'sweetalert2'
import { User } from 'src/app/model/User';
import { eType } from 'src/app/model/eType';


@Component({
  selector: 'app-set-staff-pasword',
  templateUrl: './set-staff-pasword.component.html',
  styleUrls: ['./set-staff-pasword.component.css']
})

export class SetStaffPaswordComponent implements OnInit {

  oldPass: string;
  newPass: string;
  checkNewPass: string;

  selectedValue: any = null;

  option: any[] = [
    { value: eType.staff, viewValue: 'צוות' },
    { value: eType.teacher, viewValue: 'מורה' }
  ];

  constructor(private userSer: UserService) { }

  ngOnInit() {

  }

  isPassCorect() {
    if (this.oldPass == null)
      return false;
    return this.userSer.checkOldPass(this.selectedValue,this.oldPass);
  }

  chanagePass() {        
    this.userSer.updatePass(this.selectedValue,this.newPass).subscribe(res => {
      Swal.fire({
        position: 'center',
        type: 'success',
        title: 'העדכון בוצע בהצלחה',
        showConfirmButton: false,
        timer: 1500
      })
    }
      , err => {
        Swal.fire({
          position: 'center',
          type: 'error',
          title: 'oops ארעה שגיעה נסה שוב!!!!!',
          showConfirmButton: false,
          timer: 1500
        })
      }
    )
    this.oldPass=this.newPass=this.checkNewPass=null;    
  }
}