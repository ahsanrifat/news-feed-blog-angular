import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiNoAuthService {
  baseUrl = 'http://127.0.0.1:8000';
  constructor(private _http: HttpClient) {}
  authenticateUser(userData: any) {
    return this._http.post<any>(`${this.baseUrl}/auth/api/token/`, userData);
  }
  registerUser(userData: any) {
    return this._http.post<any>(
      `${this.baseUrl}/auth/api/user/create/`,
      userData
    );
  }
}
