import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-actor-detail-info',
  templateUrl: './actor-detail-info.component.html',
  styleUrls: ['./actor-detail-info.component.scss']
})
export class ActorDetailInfoComponent implements OnInit {

  @Input() info;

  constructor() { }

  ngOnInit() {
  }

}
