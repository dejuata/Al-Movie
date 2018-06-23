import { Component, OnInit } from '@angular/core';
import { ActorService } from '../services/actor.service';
import { ActorListDescriptor } from '../types/actor-list.type';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.scss']
})
export class ActorListComponent implements OnInit {

  public actors: ActorListDescriptor;
  public option = 'popular';

  constructor(
    private actorService: ActorService
  ) {
    this.getListActors(this.option);
  }

  getListActors(opt: string) {
    this.actorService.getListActors(opt)
      .subscribe(data => {
        this.actors = data;
      }, error => {
        console.error(error);
      });
  }

  ngOnInit() {
  }

}
