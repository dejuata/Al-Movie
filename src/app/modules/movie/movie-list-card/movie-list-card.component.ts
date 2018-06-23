import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-list-card',
  templateUrl: './movie-list-card.component.html',
  styleUrls: ['./movie-list-card.component.scss']
})
export class MovieListCardComponent implements OnInit {

  @Input() movie;
  @Input() compactView;
  @Input() styleActor;

  constructor() { }

  ngOnInit() {
  }

}
