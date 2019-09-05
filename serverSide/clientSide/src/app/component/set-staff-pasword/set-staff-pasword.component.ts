import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-set-staff-pasword',
  templateUrl: './set-staff-pasword.component.html',
  styleUrls: ['./set-staff-pasword.component.css']
})

export class SetStaffPaswordComponent implements OnInit {
  oldPass: string;
  checkNewPass: string;
  newPass: string;
  constructor(private userSer: UserService) { }

  test() {
    console.log(this.oldPass)
  }

  ngOnInit() {
  }
  isPassCorect() {
    console.log(this.userSer.checkOldPass(this.oldPass));
    return this.userSer.checkOldPass(this.oldPass);
  }
  chanagePass() {
    this.userSer.updatePass(this.newPass).subscribe(res => {
      debugger;
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
  }
}