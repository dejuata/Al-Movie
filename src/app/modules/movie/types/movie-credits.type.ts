export class MovieCreditsDescriptor {
  public cast: CastDescriptor[] = [];

  public static import(rawData: any) {
    // tslint:disable-next-line:prefer-const
    let credits: MovieCreditsDescriptor = new MovieCreditsDescriptor();

    let actor: CastDescriptor;
    if (rawData.hasOwnProperty('cast')) {
      for (let i = 0; i < rawData.cast.length; i++) {
        // tslint:disable-next-line:prefer-const
        let row = rawData.cast[i];
        actor = CastDescriptor.import(row);
        credits.cast.push(actor);
      }
  }
    return credits;
  }
}

export class CastDescriptor {
  public id: number;
  public name: string;
  public profile_path: string;

  public static import(rawData: any) {
    // tslint:disable-next-line:prefer-const
    let actor: CastDescriptor = new CastDescriptor();
    const profile_path_url = 'https://image.tmdb.org/t/p/w235_and_h235_face/';
    const profile_path_url_default = 'https://icdn-0.motor1.com/custom/share/default-user.png';

    actor.id = rawData.hasOwnProperty('id') ? rawData.id : 0;
    actor.name = rawData.hasOwnProperty('name') ? rawData.name : '';
    actor.profile_path = rawData.hasOwnProperty('profile_path') && rawData.profile_path != null ?
      `${profile_path_url}${rawData.profile_path}` : profile_path_url_default;

    return actor;
  }
}
