import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CorpsService {
httpHeaders=new HttpHeaders({'Content-Type': 'application/json'})
baseURL='http://127.0.0.1:8000'
  constructor(private http:HttpClient) { }
  getCorps(categoryName:String): Observable<any>{
    return this.http.get(`${this.baseURL}/products/category/${categoryName}/`,{headers:this.httpHeaders})
  }
}
