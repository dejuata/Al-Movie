import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { MovieDetailDescriptor } from '../types/movie-detail.type';
import { MovieCreditsDescriptor } from '../types/movie-credits.type';
import { MovieVideosDescriptor } from '../types/movie-videos.type';
import { ActorSummaryDescriptor } from '../../actor/types/actor-list.type';
import { MovieRecommendationDescriptor } from '../types/movie-recommendation.type';
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  public id: string;
  public movie: MovieDetailDescriptor;
  public casting: MovieCreditsDescriptor;
  public cast: ActorSummaryDescriptor[] = [];
  public videos: MovieVideosDescriptor;
  public recommendation: MovieRecommendationDescriptor[] = [];


  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {
    this.id = this.route.snapshot.params['id'];
    this.getDetailMovie(this.id);
    this.getCreditsMovie(this.id);
    this.getVideosMovie(this.id);
    this.getRecommendationsMovie(this.id);
  }

  ngOnInit() {
  }

  getDetailMovie(id: string) {
    this.movieService.getDetailMovie(id)
      .subscribe(data => {
        this.movie = data;
      }, error => {
        console.error(error);
      });
  }

  getCreditsMovie(id: string) {
    this.movieService.getCreditsMovie(id)
      .subscribe(data => {
          this.casting = data;
          this.cast = this.casting.cast.slice(0, 12);
      }, error => {
        console.error(error);
      });
  }

  getVideosMovie(id: string) {
    this.movieService.getVideosMovie(id)
      .subscribe(data => {
        this.videos = data;
      }, error => {
        console.error(error);
      });
  }

  getRecommendationsMovie(id: string) {
    this.movieService.getRecommendationsMovie(id)
      .subscribe(data => {
        this.recommendation = data.recommendation;
        console.log(this.recommendation);
      }, error => {
        console.error(error);
      });
  }

  tabChange(event) {
    // console.log(event);
  }

  changeSlide(event) {
    if (!event.checked) {
      this.cast = this.casting.cast.slice(0, 12);
    } else {
      this.cast = this.casting.cast;
    }
  }

}
