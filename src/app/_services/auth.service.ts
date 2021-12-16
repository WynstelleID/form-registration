import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// const AUTH_API = 'http://localhost:8080/api/auth/';
const AUTH_API = 'http://13.212.226.116:8000/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    // return this.http.post(AUTH_API + 'signin', {
    return this.http.post(AUTH_API + 'api/api/token/', {
      username,
      password
    }, httpOptions);
  }

  register(username: string, password: string, first_name: string, last_name: string, telephone: number, address: string, city: string, province: string, country: string): Observable<any> {
    return this.http.post(AUTH_API + 'api/register', {
      username,
      password,
      first_name,
      last_name,
      telephone,
      address,
      city,
      province,
      country
    }, httpOptions);
  }
}
