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
public  baseURL:String=environment.apiUrl+"/PrintingSheet";
  constructor(private http:HttpClient) { }
  getSheets():Observable<sheet[]>{
    return this.http.get<sheet[]>(this.baseURL+"/GetSheets");
  } 
  
  deleteSheet(sheet){
      return this.http.delete(this.baseURL+"/RemoveSheet/"+sheet)
    }
  
  
   
   
}


