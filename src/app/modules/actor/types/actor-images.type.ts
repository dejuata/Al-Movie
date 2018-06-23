export class ActorImagesDescriptor {
  public images: ActorImageDescriptor[] = [];

  public static import(rawData: any) {
    // tslint:disable-next-line:prefer-const
    let images: ActorImagesDescriptor = new ActorImagesDescriptor();

    let image: ActorImageDescriptor;
    if (rawData.hasOwnProperty('profiles')) {
      for (let i = 0; i < rawData.profiles.length; i++) {
        // tslint:disable-next-line:prefer-const
        let row = rawData.profiles[i];
          image = ActorImageDescriptor.import(row);
        images.images.push(image);
      }
    }

    return images;
  }
}

export class ActorImageDescriptor {
  public file_path: string;
  public vote_average: number;

  public static import(rawData: any) {
    // tslint:disable-next-line:prefer-const
    let image: ActorImageDescriptor = new ActorImageDescriptor();
    const file_path_url = 'https://image.tmdb.org/t/p/w220_and_h330_bestv2';

    image.file_path = rawData.hasOwnProperty('file_path') ? `${file_path_url}${rawData.file_path}` : '';
    image.vote_average = rawData.hasOwnProperty('vote_average') ? rawData.vote_average : 0;

    return image;
  }
}
