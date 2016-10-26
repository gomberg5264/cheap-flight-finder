import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'round'})
export default class Round implements PipeTransform {
  transform(value: number, [accuracy, keep]) {
    var fixed = value.toFixed(accuracy);

    return keep ? fixed : +fixed;
  }
}
