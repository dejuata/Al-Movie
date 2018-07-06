import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private angularFireAuth: AngularFireAuth,
    private router: Router
  ) { }

  public login(email: string, password: string) {
    this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
      .then(res => {
        alert('User logged in');
        this.router.navigate(['']);
      })
      .catch(err => {
        alert('An error has occurred');
      });
  }

  public register(email: string, password: string) {
    this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(res => {
        alert('Registered user');
        this.router.navigate(['']);
      })
      .catch(err => {
        alert('An error has occurred');
      });
  }

  public isLogged() {
    return this.angularFireAuth.authState;
  }

  public logout() {
    this.angularFireAuth.auth.signOut();
    alert('Closed session');
    this.router.navigate(['']);
  }

  public getUser() {
    return this.angularFireAuth.auth;
  }
}
