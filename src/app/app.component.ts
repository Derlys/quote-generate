import { Component, OnInit } from '@angular/core';
import {QuoteService} from './quote.service'
import {Quote} from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quote';

quotes: Quote[];
  constructor( private readonly quoteService: QuoteService) {
    this.quotes = this.quoteService.quotes

  }
  quote : Quote ={
    quote:"",
    author:"",
  }
  newQuote(){
    this.quoteService.quotes.push(this.quote);
  }

}
