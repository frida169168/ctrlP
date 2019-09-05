import { Injectable } from '@angular/core';
import { User } from '../model/User'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Deposit } from '../model/Deposit';
import { PrintHistory } from '../model/PrintHistory';
import { StudentWithSpecs } from '../model/StudentWithSpecs';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  public baseURL: String = environment.apiUrl;

  public user: User;
  public printHistories:PrintHistory[]=[];

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

  checkOldPass(oldPassWord) {
    return oldPassWord == this.user.userTz;
  }

  validPass(newPass, validPass) {
    return newPass = validPass;
  }

  updatePass(newPassWord): Observable<boolean> {

    this.user.userTz = newPassWord;
    return this.http.post<boolean>(this.baseURL + " ", this.user);
  }

  getDepositsForUser(): Observable<Deposit[]> {
    return this.http.post<Deposit[]>(this.baseURL + "/deposit/get-deposits-by-userID", this.user.userId)
  }
}
