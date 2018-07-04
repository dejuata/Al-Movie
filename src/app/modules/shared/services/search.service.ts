import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { SearchDescriptor } from '../types/search.type';
import { ActorService } from '../../actor/services/actor.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private http: HttpClient,
    private actorService: ActorService
  ) { }

  private url(endpoint: string) {
    return `https://api.themoviedb.org/3/search/${endpoint}`;
  }

  public getMultiSearch(value: string) {
    // tslint:disable-next-line:prefer-const
    let endpoint = `multi?query=${value}`;
    return this.http.get(this.url(endpoint))
      .pipe(
        map(data => {
          // tslint:disable-next-line:prefer-const
          let result: SearchDescriptor = SearchDescriptor.import(data);
          // console.log(result);
          this.actorService.sortData(result.results, 'vote_count');
          console.log(result);
          return result;
        })
      );
  }
}
