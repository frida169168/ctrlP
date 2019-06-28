import { Injectable } from '@angular/core';
import {User} from '../model/User'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Deposit } from '../model/Deposit';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  public user:User;
  public  baseURL:String=environment.apiUrl+"api";
  
  constructor(private http :HttpClient) { }

  getUserByTz(user):Observable<User>{
    return this.http.post<User>(this.baseURL+"/User/login",user)
  }

  getBalanceByUser(user):Observable<number>{
    return this.http.post<number>(this.baseURL+"/User/getBalance",user)
  }

  newDeposit(deposit):Observable<Deposit>{
    return this.http.post<Deposit>(this.baseURL+"/Deposit/NewDeposit",deposit)
  }

}
