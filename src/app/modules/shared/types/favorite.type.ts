export class FavoriteListDescriptor {
  public favorites: FavoriteDescriptor[] = [];

  public static import(rawData: any) {
    // tslint:disable-next-line:prefer-const
    let favorites: FavoriteListDescriptor = new FavoriteListDescriptor();

    let favorite: FavoriteDescriptor;
    for (let i = 0; i < rawData.length; i++) {
      // tslint:disable-next-line:prefer-const
      let row = rawData[i];
      favorite = FavoriteDescriptor.import(row);
      favorites.favorites.push(favorite);
    }

    return favorites;
  }
}
export class FavoriteDescriptor {
  public id: number;
  public favorite = false;
  public info: any;

  public static import(rawData: any) {
    if (rawData != null) {
      // tslint:disable-next-line:prefer-const
      let favorite: FavoriteDescriptor = new FavoriteDescriptor();

      favorite.id = rawData.hasOwnProperty('id') ? rawData.id : 0;
      favorite.favorite = rawData.hasOwnProperty('favorite') ? rawData.favorite : false;

      if (rawData.info) {
        let path = rawData.info.poster_path;
        path = path.replace('w600', 'w185');
        path = path.replace('h900', 'h278');
        rawData.info.poster_path = path;
      }
      favorite.info = rawData.hasOwnProperty('info') ? rawData.info : {};

      return favorite;
    } else {
      return null;
    }

  }
}
