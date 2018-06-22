import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detail-info',
  templateUrl: './detail-info.component.html',
  styleUrls: ['./detail-info.component.scss']
})
export class DetailInfoComponent implements OnInit {

  @Input() info;
  @Input() genres;

  constructor() { }

  ngOnInit() {
  }

}
