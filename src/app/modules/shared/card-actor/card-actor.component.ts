import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-actor',
  templateUrl: './card-actor.component.html',
  styleUrls: ['./card-actor.component.scss']
})
export class CardActorComponent implements OnInit {

  @Input() actor;
  @Input() styleMovie;
  @Input() hideName;

  constructor() { }

  ngOnInit() {
  }

}
