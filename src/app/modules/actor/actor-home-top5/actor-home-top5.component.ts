import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-actor-home-top5',
  templateUrl: './actor-home-top5.component.html',
  styleUrls: ['./actor-home-top5.component.scss']
})
export class ActorHomeTop5Component implements OnInit {

  @Input() actor;
  constructor() { }

  ngOnInit() {
  }

}
