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
  public page = 1;

  constructor(
    private actorService: ActorService
  ) {
    this.getListActors(this.option, this.page);
  }

  getListActors(opt: string, page: number) {
    this.actorService.getListActors(opt, page)
      .subscribe(data => {
        this.actors = data;
      }, error => {
        console.error(error);
      });
  }

  listenPaginator(event: number) {
    this.page = event + 1;
    this.getListActors(this.option, this.page);
  }

  ngOnInit() {
  }

}
