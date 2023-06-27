import { Injectable } from '@angular/core';
import { Quote} from './quote'

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  quotes: Quote[] =[{
    quote:'HOLA TEST',
    author:'derlys',
  },
  ];

  constructor() { }
}
