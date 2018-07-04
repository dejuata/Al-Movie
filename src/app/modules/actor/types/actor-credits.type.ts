import { MovieSummaryDescriptor } from '../../movie/types/movie-list.type';

export class ActorCreditsDescriptor {
  public cast: MovieSummaryDescriptor[] = [];

  public static import(rawData: any) {
    // tslint:disable-next-line:prefer-const
    let credits: ActorCreditsDescriptor = new ActorCreditsDescriptor();

    let movie: MovieSummaryDescriptor;
    if (rawData.hasOwnProperty('cast')) {
      for (let i = 0; i < rawData.cast.length; i++) {
        // tslint:disable-next-line:prefer-const
        let row = rawData.cast[i];
        movie = MovieSummaryDescriptor.import(row);
        credits.cast.push(movie);
      }
  }
    return credits;
  }
}
