export class ActorCreditsDescriptor {
  public cast: CastDescriptor[] = [];

  public static import(rawData: any) {
    // tslint:disable-next-line:prefer-const
    let credits: ActorCreditsDescriptor = new ActorCreditsDescriptor();

    let movie: CastDescriptor;
    if (rawData.hasOwnProperty('cast')) {
      for (let i = 0; i < rawData.cast.length; i++) {
        // tslint:disable-next-line:prefer-const
        let row = rawData.cast[i];
        movie = CastDescriptor.import(row);
        credits.cast.push(movie);
      }
  }
    return credits;
  }
}

export class CastDescriptor {
  public id: number;
  public title: string;
  public poster_path: string;
  public release_date: string;

  public static import(rawData: any) {
    // tslint:disable-next-line:prefer-const
    let movie: CastDescriptor = new CastDescriptor();
    const poster_path_url = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2';

    movie.id = rawData.hasOwnProperty('id') ? rawData.id : 0;
    movie.title = rawData.hasOwnProperty('title') ? rawData.title : '';
    movie.poster_path = rawData.hasOwnProperty('poster_path') ? `${rawData.poster_path}` : '';
    movie.release_date = rawData.hasOwnProperty('release_date') ? rawData.release_date : '';

    return movie;
  }
}
