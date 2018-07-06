import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { FavoriteListComponent } from '../shared/favorite-list/favorite-list.component';

const routes: Routes = [
  {path: 'login', component: SignInComponent},
  {path: 'register', component: SignUpComponent},
  {path: 'favorites', component: FavoriteListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
