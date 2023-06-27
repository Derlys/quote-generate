import { Component, OnInit } from '@angular/core';
import {Quote} from './quote'
import {ApiService} from './services/api.service'

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'quote';

quotes: Quote[] = [];

  constructor( private readonly apiService: ApiService) {

  }

  ngOnInit() {
    this.getQuotes()
  }

  quote? : Quote;

  getQuotes(){
this. apiService.getQuotes().subscribe(quotes =>{
  this.quotes = quotes;
  this.getRandomQuote()
})
  }

  getRandomQuote(){
    // counter the number of quotes
    const count = this.quotes.length
    // get random number between one and count
    const random = getRandomInt(count)

    // get the quote
    this.quote = this.quotes[random -1 ]
  }

}
