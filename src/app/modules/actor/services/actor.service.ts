import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ActorDetailDescriptor } from '../types/actor-detail.type';
import { ActorCreditsDescriptor } from '../types/actor-credits.type';


@Injectable({
  providedIn: 'root'
})
export class ActorService {

  private apiKey = '5421a9a38653bf083798a7f242aa143b';

  constructor(private http: HttpClient) { }

  private url(apiKey: string, endpoint: string) {
    return `https://api.themoviedb.org/3/person/${endpoint}?api_key=${apiKey}&language=en-US&page=1`;
  }

  public getListActors(endpoint: string) {
    return this.http.get(this.url(this.apiKey, endpoint));
  }

  public getDetailActor(id: string) {
    return this.http.get(this.url(this.apiKey, id))
      .pipe(
        map(data => {
          return ActorDetailDescriptor.import(data);
        })
      );
  }

  public getCreditsActor(id: string) {
    return this.http.get(this.url(this.apiKey, `${id}/movie_credits`))
      .pipe(
        map(data => {
          return ActorCreditsDescriptor.import(data);
        })
      );
  }
}
