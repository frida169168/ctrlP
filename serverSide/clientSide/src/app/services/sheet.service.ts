import { Injectable } from '@angular/core';
import { sheet } from '../model/sheet';
import { environment } from 'src/environments/environment.prod';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SheetService {  
  
  public  baseURL:String=environment.apiUrl+"/printingSheet";
  public sheet:sheet; 

  constructor(private http:HttpClient) { }

  getSheets():Observable<sheet[]>{
    return this.http.get<sheet[]>(this.baseURL+"/get-sheets");
  } 
  
  deleteSheet(sheet){
      return this.http.delete(this.baseURL+"/remove-sheet/"+sheet)
  }     
}


