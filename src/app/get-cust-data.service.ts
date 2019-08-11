import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetCustDataService {

  constructor(private http:HttpClient) { }
  configUrl = 'assets/data.json';

  getCustData():Observable <any>{
   
    return this.http.get(this.configUrl);
  }
}
