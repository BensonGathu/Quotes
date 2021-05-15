import { Component, OnInit } from '@angular/core';
// import { globalAgent } from 'http';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    new Quote("Lil Wayne","Make money live fast die young and leave a fresh corpse","Gathu",new Date()),
    new Quote("Lil Wayne","Jesus saves , i spend","Anto",new Date())
  ]

  toggleDetails(index: number){
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }

  QuoteDelete(isDelete:boolean,index:number){
    if (isDelete){
      var con = confirm(`Are you sure you want to delete ${this.quotes[index].author}'s quote?`)
      if (con){
        this.quotes.splice(index,1)
      }
    }
  }

  addNewQuote(quote: any){
    let quoteLength = this.quotes.length
    quote.id = quoteLength+1
    quote.date = new Date(quote.date)
    this.quotes.push(quote) 
  }

  constructor() { }

  ngOnInit(): void {
  }

}
