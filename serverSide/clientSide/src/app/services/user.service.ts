import { Injectable } from '@angular/core';
import { User } from '../model/User'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Deposit } from '../model/Deposit';
import { PrintHistory } from '../model/PrintHistory';
import { UserToSpec } from '../model/UserToSpec';
import { StudentWithSpecs } from '../model/StudentWithSpecs';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  public user: User;
  public baseURL: String = environment.apiUrl;

  constructor(private http: HttpClient) { }

  // getStudents(): Observable<User[]> {
  //   return this.http.get<User[]>(this.baseURL + "/user/get-students")
  // }

   getStudentsWithSpecs(): Observable<StudentWithSpecs[]> {
    return this.http.get<StudentWithSpecs[]>(this.baseURL + "/user/get-students-with-specs")
  }
  getUserByTz(user): Observable<User> {
    return this.http.post<User>(this.baseURL + "/user/login", user)
  }

  // getUserToSpecs(): Observable<UserToSpec[]> {
  //   return this.http.get<UserToSpec[]>(this.baseURL + "/user-to-spec/get-user-to-specs")
  // }

  getBalanceByUser(user): Observable<number> {
    return this.http.post<number>(this.baseURL + "/user/get-balance", user)
  }

  newDeposit(deposit): Observable<any> {
    return this.http.post<any>(this.baseURL + "/deposit/new-deposit", deposit)
  }

  getPrinytHistory(user): Observable<PrintHistory[]> {
    return this.http.post<PrintHistory[]>(this.baseURL + "/printHistory/printHistory", user)
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
