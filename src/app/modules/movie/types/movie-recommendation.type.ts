export class MovieRecommendationsDescriptor {
  public recommendation: MovieRecommendationDescriptor[] = [];

  public static import(rawData: any) {
    // tslint:disable-next-line:prefer-const
    let recommendation: MovieRecommendationsDescriptor = new MovieRecommendationsDescriptor();

    let movie: MovieRecommendationDescriptor;
    if (rawData.hasOwnProperty('results')) {
      for (let i = 0; i < 6; i++) {
        // tslint:disable-next-line:prefer-const
        let row = rawData.results[i];
        movie = MovieRecommendationDescriptor.import(row);
        recommendation.recommendation.push(movie);
      }
    }

    return recommendation;
  }
}
export class MovieRecommendationDescriptor {
  public id: number;
  public title: string;
  public poster_path: string;

  public static import(rawData: any) {
    // tslint:disable-next-line:prefer-const
    let movie: MovieRecommendationDescriptor = new MovieRecommendationDescriptor();
    const poster_path_url = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2';

    movie.id = rawData.hasOwnProperty('id') ? rawData.id : 0;
    movie.title = rawData.hasOwnProperty('title') ? rawData.title : '';
    movie.poster_path = rawData.hasOwnProperty('poster_path') ? `${poster_path_url}${rawData.poster_path}` : '';

    return movie;
  }
}
