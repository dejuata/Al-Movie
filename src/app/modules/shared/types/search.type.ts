import { MoviePaginatorDescriptor, MovieSummaryDescriptor } from '../../movie/types/movie-list.type';
import { ActorSummaryDescriptor } from '../../actor/types/actor-list.type';

export class SearchDescriptor {
  public paginator: MoviePaginatorDescriptor;
  public results: any[] = [];

  public static import(rawData: any) {
    // tslint:disable-next-line:prefer-const
    let list: SearchDescriptor = new SearchDescriptor();

    list.paginator = MoviePaginatorDescriptor.import({
      total_pages: rawData.total_pages,
      page_size: rawData.results.length
    });

    let result: any;
    if (rawData.hasOwnProperty('results')) {
        for (let i = 0; i < rawData.results.length; i++) {
          // tslint:disable-next-line:prefer-const
          let row = rawData.results[i];
          if (row.media_type === 'movie') {
            result = MovieSummaryDescriptor.import(row);
            list.results.push(result);
          }
          if (row.media_type === 'person') {
            result = ActorSummaryDescriptor.import(row, 'https://image.tmdb.org/t/p/w138_and_h175_face');
            list.results.push(result);
          }
        }
    }

    return list;
  }
}

export class ActorCardMovie {

}

