import { Component, OnInit, ViewChild } from '@angular/core';
import { MovieService } from '../../movie/services/movie.service';
import { MovieSummaryDescriptor } from '../../movie/types/movie-list.type';
import { DragScrollDirective } from 'ngx-drag-scroll';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  leftNavDisabled = false;
  rightNavDisabled = false;

  // public movies: any[] = [];
  public genres = ['action', 'animation', 'family', 'horror', 'romance', 'thriller'];
  public movies: Object = {};
  public popularMovies: MovieSummaryDescriptor[] = [];

  constructor(
    private movieService: MovieService
  ) {
    this.getPopularMovies();
    // this.getGenresMovies('action');
    // console.log(this.movies);
    this.getAllGenresMovies();
  }

  ngOnInit() {
    // this.getAllGenresMovies();
  }


  getPopularMovies() {
    this.movieService.getListMovies('popular', 1)
      .subscribe(data => {
        this.popularMovies = data.movies;
      }, error => {
        console.error(error);
      });
  }

  getGenresMovies(value: string) {
    this.movieService.getDiscoverMovie(value)
      .subscribe(data => {
        // this.movies.push(data.movies);
        this.movies[value] = data.movies;
      }, error => {
        console.error(error);
      });
  }

  getAllGenresMovies() {

    for (let i = 0; i < this.genres.length; i++) {
      this.getGenresMovies(this.genres[i]);
    }
  }
}
