import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-movie-detail-video',
  templateUrl: './movie-detail-video.component.html',
  styleUrls: ['./movie-detail-video.component.scss']
})
export class MovieDetailVideoComponent implements OnInit {

  @Input() video;

  constructor() {}

  ngOnInit() {

  }

}
