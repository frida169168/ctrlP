import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

import { Observable } from 'rxjs';
import { Deposit } from '../model/Deposit';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepositService {

  public baseURL: String = environment.apiUrl;

  constructor(private http: HttpClient) { }
  
  getDeposits(): Observable<Deposit[]> {
    return this.http.get<Deposit[]>(this.baseURL + "/deposit/get-deposits")
  }

  deleteDeposit(deposit): Observable<any> {
    return this.http.post<any>(this.baseURL + "/deposit/delete-deposit",deposit)
  }
}
