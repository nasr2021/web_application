import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class privateService {
baseURL="http://127.0.0.1:8000"
httpHeaders=new HttpHeaders({'Content-Type': 'application/json'})
  constructor(private http:HttpClient) { }
 
  getAllProducts(): Observable<any> {
    return this.http.get(`${this.baseURL}/products/`, { headers: this.httpHeaders });
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
  getProductDetailById(productId: any): Observable<any> {
    return this.http.get(`${this.baseURL}/products/${productId}/`, { headers: this.httpHeaders });
  }
  addCommande(newproduct:any): Observable <any>{
    return this.http.post(`${this.baseURL}/order-items/`,newproduct,{headers:this.httpHeaders});
  }
  getAllorder(productId: any): Observable<any> {
    return this.http.get(`${this.baseURL}/order-items/${productId}/`, { headers: this.httpHeaders });
  }

}
