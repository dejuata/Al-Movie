import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { MovieDetailDescriptor } from '../types/movie-detail.type';
import { MovieCreditsDescriptor } from '../types/movie-credits.type';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  public id: string;
  public movie: MovieDetailDescriptor = new MovieDetailDescriptor();
  public casting: MovieCreditsDescriptor = new MovieCreditsDescriptor();


  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {
    this.id = this.route.snapshot.params['id'];
    this.getDetailMovie(this.id);
    this.getCreditsMovie(this.id);
  }

  ngOnInit() {
  }

  getDetailMovie(id: string) {
    this.movieService.getDetailMovie(id)
      .subscribe((data) => {
        this.movie = data;
      }, error => {
        console.error(error);
      });
  }

  getCreditsMovie(id: string) {
    this.movieService.getCreditsMovie(id)
      .subscribe((data) => {
        this.casting = data;
      }, error => {
        console.error(error);
      });
  }

}
