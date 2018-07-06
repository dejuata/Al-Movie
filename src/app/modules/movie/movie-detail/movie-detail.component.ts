import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { MovieDetailDescriptor } from '../types/movie-detail.type';
import { MovieCreditsDescriptor } from '../types/movie-credits.type';
import { MovieVideosDescriptor } from '../types/movie-videos.type';
import { ActorSummaryDescriptor } from '../../actor/types/actor-list.type';
import { MovieRecommendationDescriptor } from '../types/movie-recommendation.type';
import { FavoriteDescriptor } from '../../shared/types/favorite.type';

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
  public videos: MovieVideosDescriptor = new MovieVideosDescriptor;
  public recommendation: MovieRecommendationDescriptor[] = [];
  public favorite: FavoriteDescriptor = new FavoriteDescriptor();


  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
      this.getDetailMovie(this.id);
      this.getCreditsMovie(this.id);
      this.getRecommendationsMovie(this.id);
      this.isFavorite(this.id);
    });
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
      }, error => {
        console.error(error);
      });
  }

  tabChange(event) {
    if (event.tab.textLabel === 'Trailers' && this.videos.trailer.length === 0) {
      this.getVideosMovie(this.id);
      console.log(this.videos);
    }
  }

  changeSlide(event) {
    if (!event.checked) {
      this.cast = this.casting.cast.slice(0, 12);
    } else {
      this.cast = this.casting.cast;
    }
  }

  listenFavorite(event) {
    const data = {
      id: this.movie.id,
      info: this.movie.header,
      favorite: event
    };
    this.movieService.saveFavoriteMovie(data);
  }

  isFavorite(id) {
    this.movieService.getFavoriteMovie(id)
      .subscribe(res => {
        if (res != null) {
          this.favorite = res;
        }
      }, error => {
        console.error(error);
      });
  }

}
