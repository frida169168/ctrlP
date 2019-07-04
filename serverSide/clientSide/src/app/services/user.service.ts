import { Injectable } from '@angular/core';
import {User} from '../model/User'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Deposit } from '../model/Deposit';
import { PrintHistory } from '../model/PrintHistory';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  public user:User;
  public baseURL:String=environment.apiUrl;
  
  constructor(private http :HttpClient) { }

  getStudents():Observable<User[]>{
    return this.http.get<User[]>(this.baseURL+"/User/getStudents")
  }

  getUserByTz(user):Observable<User>{
    return this.http.post<User>(this.baseURL+"/User/login",user)
  }

  getBalanceByUser(user):Observable<number>{
    return this.http.post<number>(this.baseURL+"/User/getBalance",user)
  }

  newDeposit(deposit):Observable<any>{
    return this.http.post<any>(this.baseURL+"/Deposit/NewDeposit",deposit)
  }

  getPrinytHistory(user):Observable<PrintHistory[]>{
    return this.http.post<PrintHistory[]>(this.baseURL+"/PrintHistory/PrintHistory",user)
  }

}
