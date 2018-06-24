export class MovieVideosDescriptor {
  public trailer: TrailerDescriptor[] = [];

  public static import(rawData: any) {
    // tslint:disable-next-line:prefer-const
    let videos: MovieVideosDescriptor = new MovieVideosDescriptor();

    let video: TrailerDescriptor;
    if (rawData.hasOwnProperty('results')) {
      for (let i = 0; i < rawData.results.length; i++) {
        if (rawData.results[i].type === 'Trailer') {
          // tslint:disable-next-line:prefer-const
          let row = rawData.results[i];
          video = TrailerDescriptor.import(row);
          videos.trailer.push(video);
        }
      }
  }
    return videos;
  }
}

export class TrailerDescriptor {
  public id: number;
  public url: string;
  public url_youtube: string;
  public name: string;

  public static import(rawData: any) {
    // tslint:disable-next-line:prefer-const
    let video: TrailerDescriptor = new TrailerDescriptor();
    const iframe_url = 'http://www.youtube.com/embed/';
    const youtube = 'https://www.youtube.com/watch?v=';

    video.id = rawData.hasOwnProperty('id') ? rawData.id : 0;
    video.url = rawData.hasOwnProperty('key') ? `${iframe_url}${rawData.key}` : '';
    video.url_youtube = rawData.hasOwnProperty('key') ? `${youtube}${rawData.key}` : '';
    video.name = rawData.hasOwnProperty('name') ? rawData.name : '';

    return video;
  }
}
