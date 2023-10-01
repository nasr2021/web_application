import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheveuxService {
baseURL="http://127.0.0.1:8000"
httpHeaders=new HttpHeaders({'Content-Type': 'application/json'})
  constructor(private http:HttpClient) { }
  getCheveux(categoryName: string): Observable<any>{
    return this.http.get(`${this.baseURL}/products/category/${categoryName}/`, 
    {headers: this.httpHeaders});
  }
  addproduct(newproduct:any): Observable <any>{
    return this.http.post(`${this.baseURL}/products/`,newproduct,{headers:this.httpHeaders});
  }
  updateprodut(product:any) :Observable<any>{
    const id = product.id;
    return this.http.put(`${this.baseURL}/products/${id}/`,product,{headers:this.httpHeaders});
  }
  deleteprodut(product:any) :Observable<any>{
    const id = product.id;
    return this.http.delete(`${this.baseURL}/products/${id}/`,{headers:this.httpHeaders});
  }
}

