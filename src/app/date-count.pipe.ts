import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any, args?: any): number {
    const today: Date = new Date(); // get current date and time
    const todayWithNoTime: any = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const dateAddition = Math.abs(todayWithNoTime - value ); // returns value in milliseconds
    const secondsInADay = 86400; // 60 seconds*60 minutes in an hour *24 hours

    const dateAdditionSeconds = dateAddition * 0.001; // converts to seconds

    const dateCounter = dateAdditionSeconds / secondsInADay;

    if (dateCounter >= 1) {
        return dateCounter;
    } else {
        return 0;
    }
  }

}
