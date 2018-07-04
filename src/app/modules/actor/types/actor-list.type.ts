import { TruncatePipe } from '../../../pipes/truncate.pipe';

export class ActorListDescriptor {
  public paginator: ActorPaginatorDescriptor;
  public actors: ActorSummaryDescriptor[] = [];

  public static import(rawData: any) {
    // tslint:disable-next-line:prefer-const
    let list: ActorListDescriptor = new ActorListDescriptor();

    list.paginator = ActorPaginatorDescriptor.import({
      total_pages: rawData.total_pages,
      page_size: rawData.results.length
    });

    let actor: ActorSummaryDescriptor;
    if (rawData.hasOwnProperty('results')) {
        for (let i = 0; i < rawData.results.length; i++) {
          // tslint:disable-next-line:prefer-const
          let row = rawData.results[i];
          actor = ActorSummaryDescriptor.import(row);
          list.actors.push(actor);
        }
    }

    return list;
  }
}

export class ActorPaginatorDescriptor {
  public total_pages: number;
  public page_size: number;

  public static import(rawData: any) {
    // tslint:disable-next-line:prefer-const
    let paginator: ActorPaginatorDescriptor = new ActorPaginatorDescriptor();

    paginator.total_pages = rawData.hasOwnProperty('total_pages') ? rawData.total_pages : 0;
    paginator.page_size = rawData.hasOwnProperty('page_size') ? rawData.page_size : 0;

    return paginator;
  }
}

export class ActorSummaryDescriptor {
  public id: number;
  public name: string;
  public profile_path: string;
  public character: string;
  public vote_count: number;

  public static import(rawData: any, profile_path_url = 'https://image.tmdb.org/t/p/w235_and_h235_face') {
    // tslint:disable-next-line:prefer-const
    let actor: ActorSummaryDescriptor = new ActorSummaryDescriptor();
    // const profile_path_url = 'https://image.tmdb.org/t/p/w235_and_h235_face';
    const profile_path_url_default = 'https://icdn-0.motor1.com/custom/share/default-user.png';
    // tslint:disable-next-line:prefer-const
    let truncate: TruncatePipe = new TruncatePipe();

    actor.id = rawData.hasOwnProperty('id') ? rawData.id : 0;
    actor.name = rawData.hasOwnProperty('name') ? rawData.name : '';
    actor.character = rawData.hasOwnProperty('character') ? truncate.transform(rawData.character, '13') : '';
    actor.profile_path = rawData.hasOwnProperty('profile_path') && rawData.profile_path != null ?
      `${profile_path_url}${rawData.profile_path}` : profile_path_url_default;
    actor.vote_count = rawData.hasOwnProperty('popularity') ? rawData.popularity : 0;

    return actor;
  }
}
