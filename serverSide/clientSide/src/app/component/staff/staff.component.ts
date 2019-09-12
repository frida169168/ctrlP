import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onUploadClicked(e) {  
    this.userService.upLoad(e).subscribe(res => {
    }, err => { });
  }
}
