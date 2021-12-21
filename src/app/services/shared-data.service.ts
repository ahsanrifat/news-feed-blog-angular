import { Injectable } from '@angular/core';
import { UserAuthData } from '../models/user-models';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  isLoggedIn = false;
  userAuthData: UserAuthData = null;
  constructor() {}
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
}
