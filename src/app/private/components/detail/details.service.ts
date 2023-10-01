import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  baseURL = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) {}

  getProductDetails(productId: number): Observable<any> {
    const url = `${this.baseURL}/products/${productId}/`;
    return this.http.get(url, { headers: this.httpHeaders });
  }
}
