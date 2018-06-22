import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-actor-detail-header',
  templateUrl: './actor-detail-header.component.html',
  styleUrls: ['./actor-detail-header.component.scss']
})
export class ActorDetailHeaderComponent implements OnInit {

  @Input() actor;

  constructor() { }

  ngOnInit() {
  }

}
