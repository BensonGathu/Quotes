import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';
import { Count } from '../count';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  @Input()
  quote!: Quote;

  @Output() isDelete = new EventEmitter<boolean>();
  
  deleteQuote(del:boolean){
    this.isDelete.emit(del)
  }

  upVote(){
    
  }

  downVote(){

  }

  constructor() { }

  ngOnInit(): void {
  }

}
