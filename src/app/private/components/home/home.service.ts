import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
baseURL='http://127.0.0.1:8000'
httpheaders=new HttpHeaders({'Content-Type':'application/json'})
  constructor(private http:HttpClient) { }
  getAllProducts():Observable<any>{
    return this.http.get(`${this.baseURL}/products/`, {headers:this.httpheaders})

  }
}
