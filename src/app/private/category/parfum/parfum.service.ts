import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParfumService {

  baseURL='http://127.0.0.1:8000';
  httpHeaders=new HttpHeaders({'Content-Type':'application/json'})
    constructor(private http:HttpClient) { }
    getParfum(categoryName:String):Observable <any>{
      return this.http.get(`${this.baseURL}/products/category/${categoryName}/`,{headers:this.httpHeaders})
    }
}
