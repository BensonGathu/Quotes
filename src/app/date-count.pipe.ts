import { Pipe, PipeTransform } from '@angular/core';
import { Quote } from './quote'

@Pipe({
  name: 'dateCount'
})

export class DateCountPipe implements PipeTransform {

  transform(value: any): any {
    let today:any = new Date(); //get current date and time
    // let todayWithNoTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    var dateDifference = Math.abs(value - today)/1000 //returns value in miliseconds
    const secondsInDay = 86400; //60 seconds * 60 minutes in an hour * 24 hours in a day
    var days = Math.floor(dateDifference/secondsInDay) //get the number of days
    var hrs = Math.floor(dateDifference/3600) % 24
    var mints = Math.floor(dateDifference/60)% 60
    var secs = dateDifference%60
    // var dateDifferenceSeconds = dateDifference*0.001; //converts miliseconds to seconds
    // var dateCounter = dateDifferenceSeconds/secondsInDay;

    function vals(days:number,hrs:number,mints:number,secs:number){
      return `Quote was created ${days} days ${hrs} hours ${mints} minutes and ${secs} ago`
    }

    if(secs>=1 && value < today){
      // vals(days,hrs,mints,secs)
      return vals(days,hrs,mints,secs)
    }else{
      return 0
        }
      }
    }
   
  


