import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { SharedDataService } from '../services/shared-data.service';
@Injectable({
  providedIn: 'root',
})
export class AuthGuardGuard implements CanActivate {
  constructor(
    private sharedDataService: SharedDataService,
    private router: Router
  ) {}
  canActivate(): boolean {
    const loginFlag = this.sharedDataService.isLoggedIn;
    if (loginFlag) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
