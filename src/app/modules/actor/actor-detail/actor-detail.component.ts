import { Component, OnInit } from '@angular/core';
import { ActorService } from '../services/actor.service';
import { ActivatedRoute } from '@angular/router';
import { ActorDetailDescriptor } from '../types/actor-detail.type';
import { ActorCreditsDescriptor } from '../types/actor-credits.type';
import { ActorImagesDescriptor } from '../types/actor-images.type';

@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrls: ['./actor-detail.component.scss']
})
export class ActorDetailComponent implements OnInit {

  public id: string;
  public actor: ActorDetailDescriptor;
  public casting: ActorCreditsDescriptor;
  public images: ActorImagesDescriptor;

  constructor(
    private route: ActivatedRoute,
    private actorService: ActorService
  ) {
    this.id = this.route.snapshot.params['id'];
    this.getDetailActor(this.id);
    this.getCreditsActor(this.id);
    this.getImagesActor(this.id);
  }

  ngOnInit() {
  }

  getDetailActor(id: string) {
    this.actorService.getDetailActor(id)
      .subscribe(data => {
        this.actor = data;
      }, error => {
        console.error(error);
      });
  }

  getCreditsActor(id: string) {
    this.actorService.getCreditsActor(id)
      .subscribe(data => {
        this.casting = data;
      }, error => {
        console.error(error);
      });
  }

  getImagesActor(id: string) {
    this.actorService.getImagesActor(id)
      .subscribe(data => {
        this.images = data;
      }, error => {
        console.error(error);
      });
  }
}
