import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys'
})
export class KeysPipe implements PipeTransform {
  transform(value, args: string[]): any {
    // tslint:disable-next-line:prefer-const
    let keys = [];
    // tslint:disable-next-line:forin
    for (const key in value) {
      keys.push({key: key.split('_').join(' '), value: value[key]});
    }
    return keys;
  }
}
