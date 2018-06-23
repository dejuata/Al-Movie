import { ActorSummaryDescriptor } from '../../actor/types/actor-list.type';

export class MovieCreditsDescriptor {
  public cast: ActorSummaryDescriptor[] = [];

  public static import(rawData: any) {
    // tslint:disable-next-line:prefer-const
    let credits: MovieCreditsDescriptor = new MovieCreditsDescriptor();

    let actor: ActorSummaryDescriptor;
    if (rawData.hasOwnProperty('cast')) {
      for (let i = 0; i < rawData.cast.length; i++) {
        // tslint:disable-next-line:prefer-const
        let row = rawData.cast[i];
        actor = ActorSummaryDescriptor.import(row);
        credits.cast.push(actor);
      }
  }
    return credits;
  }
}
