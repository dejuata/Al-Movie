import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieDetailDescriptor } from '../types/movie-detail.type';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiKey = '5421a9a38653bf083798a7f242aa143b';

  constructor(private http: HttpClient) { }

  private url(apiKey: string, endpoint: string) {
    return `https://api.themoviedb.org/3/movie/${endpoint}?api_key=${apiKey}&language=en-US&page=1`;
  }

  public getListMovies(endpoint: string) {
    return this.http.get(this.url(this.apiKey, endpoint));
  }

  public getDetailMovie(id: string) {
    return this.http.get(this.url(this.apiKey, id))
      .pipe(
        map(data => {
          return MovieDetailDescriptor.import(data);
        })
      );
  }

  public getCreditsMovie(id: string) {
    return this.http.get(this.url(this.apiKey, `${id}/credits`));
  }
}