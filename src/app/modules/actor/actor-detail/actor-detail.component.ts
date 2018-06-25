import { Component, OnInit } from '@angular/core';
import { ActorService } from '../services/actor.service';
import { ActivatedRoute } from '@angular/router';
import { ActorDetailDescriptor } from '../types/actor-detail.type';
import { ActorCreditsDescriptor, CastDescriptor } from '../types/actor-credits.type';
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
  public cast: CastDescriptor[] = [];
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
        console.log(this.casting);
        this.cast = this.casting.cast.slice(0, 8);
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

  changeSlide(event) {
    if (!event.checked) {
      this.cast = this.casting.cast.slice(0, 8);
    } else {
      this.cast = this.casting.cast;
    }
  }
}
