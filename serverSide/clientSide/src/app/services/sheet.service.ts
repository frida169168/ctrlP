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
public  baseURL:String=environment.apiUrl+"/printing-sheet";
  constructor(private http:HttpClient) { }
  getSheets():Observable<Sheet[]>{
    return this.http.get<Sheet[]>(this.baseURL+"/get-sheets");
  } 
  
  deleteSheet(sheet){
      return this.http.delete(this.baseURL+"/remove-sheet/"+sheet);
    }
  EditSheet(sheet){
    debugger;
    return this.http.post(this.baseURL+"/update-sheet",sheet);
  }
  addSheeet(sheet){
    return this.http.post(this.baseURL+"/add-sheet",sheet);
  }   
}



