import { Injectable } from '@angular/core';
import { sheet } from '../model/sheet';
import { environment } from 'src/environments/environment.prod';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SheetService {
public sheet:sheet;
public  baseURL:String=environment.apiUrl+"api/PrintingSheet";
  constructor(private http:HttpClient) { }
  getSheets():Observable<sheet[]>{
    return this.http.get<sheet[]>(this.baseURL+"/GetSheets");
  }

}
// export class UserService {
//   public user:User;
//   public  baseURL:String=environment.apiUrl+"user";
  
//   constructor(private http :HttpClient) { }

//   getUserByTz(user):Observable<User>{
//     return this.http.post<User>(this.baseURL+"api/User/login",user)
//   }

//   getBalanceByUser(user):Observable<number>{
//     return this.http.post<number>(this.baseURL+"api/User/getbalance",user)
//  } }

