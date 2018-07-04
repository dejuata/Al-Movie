import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ActorDetailDescriptor } from '../types/actor-detail.type';
import { ActorCreditsDescriptor } from '../types/actor-credits.type';
import { ActorListDescriptor } from '../types/actor-list.type';
import { ActorImagesDescriptor } from '../types/actor-images.type';


@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor(private http: HttpClient) { }

  private url(endpoint: string) {
    return `https://api.themoviedb.org/3/person/${endpoint}`;
  }

  public getListActors(endpoint: string, page: number) {
    endpoint = `${endpoint}?page=${page}`;
    return this.http.get(this.url(endpoint))
      .pipe(
        map(data => {
          return ActorListDescriptor.import(data);
        })
      );
  }

  public getDetailActor(id: string) {
    return this.http.get(this.url(id))
      .pipe(
        map(data => {
          return ActorDetailDescriptor.import(data);
        })
      );
  }

  public getCreditsActor(id: string) {
    return this.http.get(this.url(`${id}/movie_credits`))
      .pipe(
        map(data => {
          // tslint:disable-next-line:prefer-const
          let result = ActorCreditsDescriptor.import(data);
          // order movies by vote_count
          this.sortData(result.cast, 'vote_count');
          return result;
        })
      );
  }

  public getImagesActor(id: string) {
    return this.http.get(this.url(`${id}/images`))
    .pipe(
      map(data => {
        // tslint:disable-next-line:prefer-const
        let result: ActorImagesDescriptor = ActorImagesDescriptor.import(data);
        // order images by vote_average
        this.sortData(result.images, 'vote_average');
        return result;
      })
    );
  }

  public sortData(lst: any, key: string) {
    lst.sort((a, b) => {
      if (a[key] < b[key]) {
        return 1;
      } else if (a[key] > b[key]) {
        return -1;
      } else {
        return 0;
      }
    });
  }
}
