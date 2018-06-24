import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { MovieListDescriptor } from '../types/movie-list.type';
import { MovieDetailDescriptor } from '../types/movie-detail.type';
import { MovieCreditsDescriptor } from '../types/movie-credits.type';
import { MovieVideosDescriptor } from '../types/movie-videos.type';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  private url(endpoint: string) {
    return `https://api.themoviedb.org/3/movie/${endpoint}`;
  }

  public getListMovies(endpoint: string) {
    return this.http.get(this.url(endpoint))
      .pipe(
        map(data => {
          return MovieListDescriptor.import(data);
        })
      );
  }

  public getDetailMovie(id: string) {
    return this.http.get(this.url(id))
      .pipe(
        map(data => {
          return MovieDetailDescriptor.import(data);
        })
      );
  }

  public getCreditsMovie(id: string) {
    return this.http.get(this.url(`${id}/credits`))
      .pipe(
        map(data => {
          return MovieCreditsDescriptor.import(data);
        })
      );
  }

  public getVideosMovie(id: string) {
    return this.http.get(this.url(`${id}/videos`))
      .pipe(
        map(data => {
          return MovieVideosDescriptor.import(data);
        })
      );
  }
}
