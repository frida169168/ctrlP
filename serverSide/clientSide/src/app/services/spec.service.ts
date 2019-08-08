import { Injectable } from '@angular/core';
//import { HttpClient } from 'selenium-webdriver/http';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { Specialization } from '../model/Specialization';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class SpecService {

  public baseURL=environment.apiUrl+"/specialization";

  constructor(private http:HttpClient) { }

  getAllSpec():Observable<Specialization[]>{
    return this.http.get<Specialization[]>(this.baseURL+"/get-specs");
  }
}