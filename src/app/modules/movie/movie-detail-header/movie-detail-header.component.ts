import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-movie-detail-header',
  templateUrl: './movie-detail-header.component.html',
  styleUrls: ['./movie-detail-header.component.scss']
})
export class MovieDetailHeaderComponent implements OnInit {

  @Input() movie;

  constructor() {
  }

  ngOnInit() {

  }

}
