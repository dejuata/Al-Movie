import { DatePipe } from '@angular/common';

export class ActorDetailDescriptor {
  public id: number;
  public header: ActorDetailHeaderDescriptor;
  public info: ActorDetailInfoDescriptor;

  public static import(rawData: any) {
    // tslint:disable-next-line:prefer-const
    let actor: ActorDetailDescriptor = new ActorDetailDescriptor();

    actor.id = rawData.hasOwnProperty('id') ? rawData.id : 0;

    actor.header = ActorDetailHeaderDescriptor.import({
      name: rawData.name,
      biography: rawData.biography,
      profile_path: rawData.profile_path
    });

    actor.info = ActorDetailInfoDescriptor.import({
      gender: rawData.gender,
      birthday: rawData.birthday,
      place_of_birth: rawData.place_of_birth,
      homepage: rawData.homepage
    });

    return actor;
  }
}

export class ActorDetailHeaderDescriptor {
  public name: string;
  public biography: string;
  public profile_path: string;

  public static import(rawData: any) {
    // tslint:disable-next-line:prefer-const
    let header: ActorDetailHeaderDescriptor = new ActorDetailHeaderDescriptor();
    const profile_path_url = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2';

    header.name = rawData.hasOwnProperty('name') ? rawData.name : '';
    header.biography = rawData.hasOwnProperty('biography') ? rawData.biography : 'Biography not available';
    header.profile_path = rawData.hasOwnProperty('profile_path') ? `${profile_path_url}${rawData.profile_path}` : '';

    return header;
  }
}

export class ActorDetailInfoDescriptor {
  public gender: string;
  public birthday: string;
  public place_of_birth: string;
  public homepage: string;

  public static import(rawData: any) {
    // tslint:disable-next-line:prefer-const
    let info: ActorDetailInfoDescriptor = new ActorDetailInfoDescriptor();
    // tslint:disable-next-line:prefer-const
    let date: DatePipe = new DatePipe('en-US');

    info.gender = rawData.hasOwnProperty('gender') ? ActorDetailInfoDescriptor.genderText(rawData.gender) : '';
    info.birthday = rawData.hasOwnProperty('birthday') ? date.transform(rawData.birthday) : '';
    info.place_of_birth = rawData.hasOwnProperty('place_of_birth') ? rawData.place_of_birth : '';
    info.homepage = rawData.hasOwnProperty('homepage') && rawData.homepage != null  ? rawData.homepage : 'None';

    return info;
  }

  public static genderText(id: number): string {
    return id === 1 ? 'Female' : 'Male';
  }
}
