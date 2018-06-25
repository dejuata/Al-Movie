import { Component, OnInit } from '@angular/core';
import { ActorService } from '../../actor/services/actor.service';
import { ActorSummaryDescriptor } from '../../actor/types/actor-list.type';
import { MovieService } from '../../movie/services/movie.service';
import { MovieSummaryDescriptor } from '../../movie/types/movie-list.type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  massEditConfig = {};
  accountId: number;
  deploymentId: number;
  params: any;

  public actors: ActorSummaryDescriptor[] = [];
  public movies: MovieSummaryDescriptor[] = [];
  public theatersMovies: MovieSummaryDescriptor[] = [];

  constructor(
    private actorService: ActorService,
    private movieService: MovieService
  ) {
    this.getTop5PopularPeople();
    this.getPopularMovies();
    this.getInTheatersMovies();
  }

  ngOnInit() {
  }

  getTop5PopularPeople() {
    this.actorService.getListActors('popular')
      .subscribe(data => {
        for (let i = 0; i < 5; i++) {
          this.actors.push(data.actors[i]);
        }
      }, error => {
        console.error(error);
      });
  }

  getInTheatersMovies() {
    this.movieService.getListMovies('popular')
      .subscribe(data => {
        for (let i = 0; i < 3; i++) {
          this.theatersMovies.push(data.movies[i]);
        }
        console.log(this.theatersMovies);
      }, error => {
        console.error(error);
      });
  }

  getPopularMovies() {
    this.movieService.getDiscoverMovie()
      .subscribe(data => {
        for (let i = 0; i < 5; i++) {
          this.movies.push(data.movies[i]);
        }
      }, error => {
        console.error(error);
      });
  }

  // setupMassEditConfig() {
  //   this.massEditConfig = {
  //     accountId: this.accountId,
  //     deploymentId: this.deploymentId,
  //     items_count: 0,
  //     params: this.params
  //   };
  // }

  // onSearch(value: string) {
  //   this.params.offset = 0;
  //   this.params.search = value ? value : undefined;
  //   this.loadData('all');
  // }

  // loadData(value: string) {
  //   console.log(value);
  // }

}
