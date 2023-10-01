import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  baseURL = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) {}

   getOrderList(): Observable<any> {
     const url = `${this.baseURL}/orders/`;
     return this.http.get(url, { headers: this.httpHeaders });
   }
}
