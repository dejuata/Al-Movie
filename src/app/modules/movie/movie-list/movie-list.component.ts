import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  public movies;
  public menu = ['popular', 'top rated', 'upcoming', 'now playing'];
  public option = 'popular';

  constructor(
    private movieService: MovieService
  ) {
    this.getListMovies(this.option);
  }

  listenMenu(event) {
    this.option = event.split(' ').join('_');
    this.getListMovies(this.option);
  }

  getListMovies(opt: string) {
    this.movieService.getListMovies(opt)
      .subscribe((data: Response) => {
        this.movies = data;
      }, error => {
        console.error(error);
      });
  }

  ngOnInit() {
  }

}
