import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthData } from '../models/user-models';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  isLoggedIn = false;
  userAuthData: UserAuthData = null;
  constructor(private router: Router) {}
  setCookieData(key: string, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }
  getCookieData(key: string) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (e) {
      console.log(key, e);
    }
  }
  clearCookieData(key: string) {
    localStorage.removeItem(key);
  }
  isUserLoggedIn() {
    if (this.getCookieData('userAuthData')) {
      this.isLoggedIn = true;
    }
    return this.isLoggedIn;
  }
  logoutUser() {
    localStorage.clear();
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }
}
