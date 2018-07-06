import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-detail-info',
  templateUrl: './detail-info.component.html',
  styleUrls: ['./detail-info.component.scss']
})
export class DetailInfoComponent implements OnInit {

  @Input() info;
  @Input() genres;
  @Input() favorite;
  @Output() saveFavorite = new EventEmitter();
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

  listenCheckbox(event) {
    this.saveFavorite.emit(event.checked);
  }

}
