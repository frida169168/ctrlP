import { Injectable } from '@angular/core';
import { User } from '../model/User'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Deposit } from '../model/Deposit';
import { PrintHistory } from '../model/PrintHistory';
import { StudentWithSpecs } from '../model/StudentWithSpecs';
import { eType } from '../model/eType';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  public baseURL: String = environment.apiUrl;

  public user: User;
  public teacher: User = null;

  public printHistories: PrintHistory[] = [];

  constructor(private http: HttpClient) { }


  getStudentsWithSpecs(): Observable<StudentWithSpecs[]> {
    return this.http.get<StudentWithSpecs[]>(this.baseURL + "/user/get-students-with-specs")
  }

  getUser(user): Observable<User> {
    return this.http.post<User>(this.baseURL + "/user/login", user)
  }

  getBalanceByUser(user): Observable<number> {
    return this.http.post<number>(this.baseURL + "/user/get-balance", user)
  }

  newDeposit(deposit): Observable<any> {
    return this.http.post<any>(this.baseURL + "/deposit/new-deposit", deposit)
  }

  depositForStudents(deposits): Observable<any> {
    return this.http.post<any>(this.baseURL + "/deposit/deposit-for-students", deposits)
  }

  getPrinytHistory(): Observable<PrintHistory[]> {
    return this.http.post<PrintHistory[]>(this.baseURL + "/printHistory/printHistory-by-user", this.user)
  }

  checkOldPass(e: eType, oldPassword) {
    if (e == eType.staff)
      return oldPassword == this.user.userTz;
    else if (e == eType.teacher) {
      if (this.teacher == null)
        this.getTeacher().subscribe(res => {
          this.teacher = res;
          return oldPassword == this.teacher.userTz;
        }, err => { });
      else
        return oldPassword == this.teacher.userTz;
    }
  }

  updatePass(e: eType, newPassWord): Observable<any> {
    if (e == eType.staff) {
      this.user.userTz = newPassWord;
      return this.http.post<any>(this.baseURL + "/user/change-password", this.user);
    }
    else{
      this.teacher.userTz=newPassWord;
      return this.http.post<any>(this.baseURL + "/user/change-password", this.teacher);
    }
  }

  getTeacher(): Observable<User> {
    return this.http.get<User>(this.baseURL + "/user/get-teacher");
  }

  upLoad(files): Observable<any> {
    var fd = new FormData();
    fd.append("file", files[0]);
    return this.http.post<any>(this.baseURL + "/read-excel/test", fd)
  }
}