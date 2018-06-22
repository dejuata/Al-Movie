import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-detail-info',
  templateUrl: './movie-detail-info.component.html',
  styleUrls: ['./movie-detail-info.component.scss']
})
export class MovieDetailInfoComponent implements OnInit {

  @Input() info;
  @Input() geners;

  constructor() { }

  ngOnInit() {
  }

}
