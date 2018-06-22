import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-list-menu',
  templateUrl: './movie-list-menu.component.html',
  styleUrls: ['./movie-list-menu.component.scss']
})
export class MovieListMenuComponent implements OnInit {

  @Input() options;
  @Output() optionMenu = new EventEmitter();

  constructor() { }

  optionClicked(opt) {
    return this.optionMenu.emit(opt);
  }

  ngOnInit() {
  }

}
