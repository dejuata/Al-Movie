import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'durationTime'
})
export class DurationTimePipe implements PipeTransform {
  transform(value: number): string {
    const hours = Math.floor( value / 60);
    const minutes = value % 60;
    return `${hours}h ${minutes}m`;
 }
}
