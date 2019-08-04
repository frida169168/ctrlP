import { Injectable } from '@angular/core';
import { Sheet } from '../model/Sheet';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SheetService {
public sheet:Sheet;
public  baseURL:String=environment.apiUrl+"/PrintingSheet";
  constructor(private http:HttpClient) { }
  getSheets():Observable<Sheet[]>{
    return this.http.get<Sheet[]>(this.baseURL+"/GetSheets");
  } 
  
  deleteSheet(sheet){
      return this.http.delete(this.baseURL+"/RemoveSheet/"+sheet);
    }
  EditSheet(sheet){
    debugger;
    return this.http.post(this.baseURL+"/UpdateSheet",sheet);
  }
  addSheeet(sheet){
    return this.http.post(this.baseURL+"/AddSheet",sheet);
  }   
}


