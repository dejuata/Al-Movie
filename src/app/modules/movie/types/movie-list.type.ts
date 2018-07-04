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
  public backdrop_path: string;
  public vote_count: number;

  public static import(rawData: any) {
    // tslint:disable-next-line:prefer-const
    let movie: MovieSummaryDescriptor = new MovieSummaryDescriptor();
    // tslint:disable-next-line:prefer-const
    let date: DatePipe = new DatePipe('en-US');
    // tslint:disable-next-line:prefer-const
    let truncate: TruncatePipe = new TruncatePipe();
    const poster_path_url = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2';
    const poster_path_null = 'http://kineto.ca/wp-content/uploads/2017/03/null-movie-poster.png';
    const backdrop_path_url = 'https://image.tmdb.org/t/p/w500_and_h282_face';

    movie.id = rawData.hasOwnProperty('id') ? rawData.id : 0;
    movie.title = rawData.hasOwnProperty('title') ? rawData.title : '';
    movie.release_date = rawData.hasOwnProperty('release_date') ? date.transform(rawData.release_date) : '';
    movie.overview = rawData.hasOwnProperty('overview') ? truncate.transform(rawData.overview, '213') : '';
    movie.poster_path = rawData.hasOwnProperty('poster_path') && rawData.poster_path != null ?
      `${poster_path_url}${rawData.poster_path}` : poster_path_null;
    movie.backdrop_path = rawData.hasOwnProperty('backdrop_path') && rawData.backdrop_path != null ?
    `${backdrop_path_url}${rawData.backdrop_path}` : '';
    movie.vote_count = rawData.hasOwnProperty('vote_count') ? rawData.vote_count : 0;

    return movie;
  }
}
