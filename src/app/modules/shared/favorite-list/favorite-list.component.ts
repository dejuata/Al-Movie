import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../movie/services/movie.service';
import { FavoriteListDescriptor } from '../types/favorite.type';
import { ActorService } from '../../actor/services/actor.service';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.scss']
})
export class FavoriteListComponent implements OnInit {

  public movies: FavoriteListDescriptor;
  public actors: FavoriteListDescriptor;
  public showData = true;

  constructor(
    private movieService: MovieService,
    private actorService: ActorService
  ) {
    this.getMovies();
    this.getActors();
  }

  ngOnInit() {
  }

  showFavoritesMovies() {
    this.showData = true;
  }

  showFavoritesActors() {
    this.showData = false;
  }

  getMovies() {
    this.movieService.getFavoriteMovies()
      .subscribe(res => {
        this.movies = res;
      }, error => {
        console.log(error);
      });
  }

  getActors() {
    this.actorService.getFavoriteActors()
    .subscribe(res => {
      this.actors = res;
      console.log(this.actors);
    }, error => {
      console.log(error);
    });
  }

}
