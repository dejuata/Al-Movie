import { DatePipe } from '@angular/common';
import { DurationTimePipe } from '../../../pipes/duration-time.pipe';

export class MovieDetailDescriptor {
  public id: number;
  public header: MovieDetailHeaderDescriptor;
  public info: MovieDetailInfoDescriptor;
  public genres: GenreDescriptor[] = [];

  public static import(rawData: any) {
    // tslint:disable-next-line:prefer-const
    let movie: MovieDetailDescriptor = new MovieDetailDescriptor();

    movie.id = rawData.hasOwnProperty('id') ? rawData.id : 0;

    movie.header = MovieDetailHeaderDescriptor.import({
      title: rawData.title,
      overview: rawData.overview,
      poster_path: rawData.poster_path,
      backdrop_path: rawData.backdrop_path,

    });

    movie.info = MovieDetailInfoDescriptor.import({
      status: rawData.status,
      release_date: rawData.release_date,
      original_language: rawData.original_language,
      runtime: rawData.runtime ,
      budget: rawData.budget,
      revenue: rawData.revenue,
      homepage: rawData.homepage
    });

    let genre: GenreDescriptor;
    if (rawData.hasOwnProperty('genres')) {
        for (let i = 0; i < rawData.genres.length; i++) {
          // tslint:disable-next-line:prefer-const
          let row = rawData.genres[i];
          genre = GenreDescriptor.import(row);
          movie.genres.push(genre);
        }
    }

    return movie;
  }

}

export class MovieDetailHeaderDescriptor {
  public title: string;
  public subtitle: string;
  public summary: string;
  public poster_path: string;
  public backdrop_path: string;

  public static import(rawData: any) {
    // tslint:disable-next-line:prefer-const
    let movie: MovieDetailHeaderDescriptor = new MovieDetailHeaderDescriptor();
    const poster_path_url = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/';
    const backdrop_path_url = 'https://image.tmdb.org/t/p/w1400_and_h450_face';

    movie.title = rawData.hasOwnProperty('title') ? rawData.title : '';
    movie.subtitle = 'Overview';
    movie.summary = rawData.hasOwnProperty('overview') ? rawData.overview : '';
    movie.poster_path = rawData.hasOwnProperty('poster_path') ? `${poster_path_url}${rawData.poster_path}` : '';
    movie.backdrop_path = rawData.hasOwnProperty('backdrop_path') ? `${backdrop_path_url}${rawData.backdrop_path}` : '';

    return movie;
  }
}

export class MovieDetailInfoDescriptor {
  public status: string;
  public release_date: string;
  public original_language: string;
  public runtime: string;
  public budget: string;
  public revenue: string;
  public homepage: string;

  public static import(rawData: any) {

    // tslint:disable-next-line:prefer-const
    let movie: MovieDetailInfoDescriptor = new MovieDetailInfoDescriptor;
    // tslint:disable-next-line:prefer-const
    let date: DatePipe = new DatePipe('en-US');
    // tslint:disable-next-line:prefer-const
    let duration: DurationTimePipe = new DurationTimePipe();

    movie.status = rawData.hasOwnProperty('status') ? rawData.status : '';
    movie.release_date = rawData.hasOwnProperty('release_date') ? date.transform(rawData.release_date) : '';
    movie.original_language = rawData.hasOwnProperty('original_language') ?
      MovieDetailInfoDescriptor.language(rawData.original_language) : '';
    movie.runtime = rawData.hasOwnProperty('runtime') ? duration.transform(rawData.runtime) : '';
    movie.budget = rawData.hasOwnProperty('budget') ? `$ ${rawData.budget}` : '';
    movie.revenue = rawData.hasOwnProperty('revenue') ? `$ ${rawData.revenue}` : '';
    movie.homepage = rawData.hasOwnProperty('homepage') ? rawData.homepage : '';

    return movie;
  }

  public static language(str: string): string {
    return str === 'en' ? 'English' : str;
  }
}

export class GenreDescriptor {
  public id: number;
  public name: string;

  public static import(rawData: any) {
    // tslint:disable-next-line:prefer-const
    let movie: GenreDescriptor = new GenreDescriptor();

    movie.id = rawData.hasOwnProperty('id') ? rawData.id : 0;
    movie.name = rawData.hasOwnProperty('name') ? rawData.name : '';
    return movie;
  }
}


