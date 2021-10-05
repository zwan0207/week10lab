import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ageTransfer'
})
export class AgeTransferPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): number {
    let cur_date = new Date().getFullYear();
    let age = value;
    age = cur_date - age;
    return age;
  }

}
