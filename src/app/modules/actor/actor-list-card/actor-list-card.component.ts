import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-actor-list-card',
  templateUrl: './actor-list-card.component.html',
  styleUrls: ['./actor-list-card.component.scss']
})
export class ActorListCardComponent implements OnInit {

  @Input() actor;
  @Input() styleMovie;

  constructor() { }

  ngOnInit() {
  }

}
