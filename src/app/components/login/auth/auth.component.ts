import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ApiNoAuthService } from 'src/app/services/api-no-auth.service';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  // otherwise load register
  isLoginFormActive = true;
  hide = true;
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  registrationForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    fullName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
  });

  constructor(
    private apiNoAuth: ApiNoAuthService,
    private sharedData: SharedDataService
  ) {}

  ngOnInit(): void {}

  submitLogin() {
    console.log(this.loginForm.value);
    this.apiNoAuth.authenticateUser(this.loginForm.value).subscribe((data) => {
      console.log('Return from login api call-->', data);
      if (data?.success == false) {
        alert(data?.message);
      } else if (data?.success == true) {
        this.sharedData.userAuthData = data?.user_auth_data;
        console.log('UserData->', this.sharedData.userAuthData);
        this.sharedData.setCookieData(
          'userAuthData',
          this.sharedData.userAuthData
        );
      }
    });
  }
  submitRegistration() {
    console.log(this.registrationForm.value);
  }
}
