import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';

// Modules
import { SharedModule } from '../shared/shared.module';

// Components
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ],
  declarations: [
    SignInComponent,
    SignUpComponent
  ]
})
export class AuthModule { }
