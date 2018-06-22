import { Component, OnInit } from '@angular/core';
import { ActorService } from '../services/actor.service';
import { ActivatedRoute } from '@angular/router';
import { ActorDetailDescriptor } from '../types/actor-detail.type';

@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrls: ['./actor-detail.component.scss']
})
export class ActorDetailComponent implements OnInit {

  public id: string;
  public actor: ActorDetailDescriptor = new ActorDetailDescriptor();

  constructor(
    private route: ActivatedRoute,
    private actorService: ActorService
  ) {
    this.id = this.route.snapshot.params['id'];
    this.getDetailActor(this.id);
  }

  ngOnInit() {
  }

  getDetailActor(id: string) {
    this.actorService.getDetailActor(id)
      .subscribe((data) => {
        this.actor = data;
      }, error => {
        console.error(error);
      });
  }
}
