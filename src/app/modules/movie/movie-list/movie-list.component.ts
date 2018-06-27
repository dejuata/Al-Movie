import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { MovieListDescriptor } from '../types/movie-list.type';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  public movies: MovieListDescriptor;
  public menu = ['popular', 'top rated', 'upcoming', 'now playing'];
  public option = 'popular';
  public page = 1;
  public checkedSlide = false;

  constructor(
    private movieService: MovieService
  ) {
    this.getListMovies(this.option, this.page);
  }

  listenMenu(event) {
    this.option = event.split(' ').join('_');
    this.getListMovies(this.option, this.page);
  }

  listenPaginator(event: number) {
    // le sumo mas 1 porque el componente returna el index de la pagina desde 0
    // y la url de la api empieza desde 1
    this.page = event + 1;
    this.getListMovies(this.option, this.page);
  }

  changeSlide(event) {
    this.checkedSlide = event.checked;
  }

  getListMovies(opt: string, page: number) {
    this.movieService.getListMovies(opt, page)
      .subscribe(data => {
        this.movies = data;
      }, error => {
        console.error(error);
      });
  }

  ngOnInit() {
  }

}
