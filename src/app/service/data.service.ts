import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  
   }
   private url='http://127.0.0.1:8000/api/V1/'

   getData(apiName: string) {
    return this.http.get(`${this.url}`+apiName);
    } 
  
  // getData();
}
