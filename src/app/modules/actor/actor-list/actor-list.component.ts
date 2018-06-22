import { Component, OnInit } from '@angular/core';
import { ActorService } from '../services/actor.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.scss']
})
export class ActorListComponent implements OnInit {

  public actors;
  public option = 'popular';

  constructor(
    private actorService: ActorService
  ) {
    this.getListActors(this.option);
  }

  getListActors(opt: string) {
    this.actorService.getListActors(opt)
      .subscribe((data: Response) => {
        this.actors = data;
        console.log(this.actors);
      }, error => {
        console.error(error);
      });
  }

  ngOnInit() {
  }

}
