import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { AuthComponent } from './auth/auth.component';
import { ExtarnalModule } from '../extarnal/extarnal.module';

@NgModule({
  declarations: [AuthComponent],
  imports: [CommonModule, LoginRoutingModule, ExtarnalModule],
})
export class LoginModule {}
