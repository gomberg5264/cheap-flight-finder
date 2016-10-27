import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'time'})
export default class Time implements PipeTransform {
  transform(value: number) {
    return String(value).replace(/^([^:]*:)([^:]*:)(.*)$/, (all, m1, m2, m3) => m1.replace(/^0/, "") + m2 + parseFloat(m3).toFixed(0));
  }
}
