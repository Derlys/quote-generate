import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import {Observable} from 'rxjs'
import {Quote} from '../quote'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlApi = 'https://type.fit/api/quotes';

  constructor(private http: HttpClient) { }

  public getQuotes(): Observable<Quote[]>{

    return this.http.get<Quote[]>(this.urlApi)


  }
}
