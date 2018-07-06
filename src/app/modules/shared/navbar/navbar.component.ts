import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  loggedIn = false;

  constructor(
    private authService: AuthService
  ) {
    this.userIsLogged();
  }

  ngOnInit() {
  }

  userIsLogged() {
    this.authService.isLogged()
      .subscribe(res => {
        if ( res && res.uid ) {
          this.loggedIn = true;
        } else {
          this.loggedIn = false;
        }
      }, error => {
        this.loggedIn = false;
      });
  }

  logout() {
    this.authService.logout();
  }

}
