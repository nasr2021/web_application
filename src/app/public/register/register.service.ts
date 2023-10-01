import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  baseURL="http://127.0.0.1:8000"
  httpHeaders=new HttpHeaders({'Content-Type': 'application/json'})
    constructor(private http:HttpClient) { }
  registerUser(user: any): Observable<any> {
    return this.http.post(`${this.baseURL}/users/`, user, { headers: this.httpHeaders });
  }
  getuserdetails(userId: any): Observable<any> {
    const id = userId.id;
    return this.http.get(`${this.baseURL}/users/${id}/`, { headers: this.httpHeaders });
  }
}
