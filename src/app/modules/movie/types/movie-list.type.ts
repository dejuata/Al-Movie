import { DatePipe } from '@angular/common';
import { TruncatePipe } from '../../../pipes/truncate.pipe';

export class MovieListDescriptor {
  public paginator: MoviePaginatorDescriptor;
  public movies: MovieSummaryDescriptor[] = [];

  public static import(rawData: any) {
    // tslint:disable-next-line:prefer-const
    let list: MovieListDescriptor = new MovieListDescriptor();

    list.paginator = MoviePaginatorDescriptor.import({
      total_pages: rawData.total_pages,
      page_size: rawData.results.length
    });

    let movie: MovieSummaryDescriptor;
    if (rawData.hasOwnProperty('results')) {
        for (let i = 0; i < rawData.results.length; i++) {
          // tslint:disable-next-line:prefer-const
          let row = rawData.results[i];
          movie = MovieSummaryDescriptor.import(row);
          list.movies.push(movie);
        }
    }

    return list;
  }
}

export class MoviePaginatorDescriptor {
  public total_pages: number;
  public page_size: number;

  public static import(rawData: any) {
    // tslint:disable-next-line:prefer-const
    let paginator: MoviePaginatorDescriptor = new MoviePaginatorDescriptor();

    paginator.total_pages = rawData.hasOwnProperty('total_pages') ? rawData.total_pages : 0;
    paginator.page_size = rawData.hasOwnProperty('page_size') ? rawData.page_size : 0;

    return paginator;
  }
}

export class MovieSummaryDescriptor {
  public id: number;
  public title: string;
  public release_date: string;
  public overview: string;
  public poster_path: string;

  public static import(rawData: any) {
    // tslint:disable-next-line:prefer-const
    let summary: MovieSummaryDescriptor = new MovieSummaryDescriptor();
    // tslint:disable-next-line:prefer-const
    let date: DatePipe = new DatePipe('en-US');
    // tslint:disable-next-line:prefer-const
    let truncate: TruncatePipe = new TruncatePipe();
    const poster_path_url = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2';


    summary.id = rawData.hasOwnProperty('id') ? rawData.id : 0;
    summary.title = rawData.hasOwnProperty('title') ? rawData.title : '';
    summary.release_date = rawData.hasOwnProperty('release_date') ? date.transform(rawData.release_date) : '';
    summary.overview = rawData.hasOwnProperty('overview') ? truncate.transform(rawData.overview, '213') : '';
    summary.poster_path = rawData.hasOwnProperty('poster_path') ? `${poster_path_url}${rawData.poster_path}` : '';

    return summary;
  }
}
