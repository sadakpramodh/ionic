import { Component, OnInit } from '@angular/core';
import { Quote } from "../../data/quote.interface";
import { NavController, NavParams } from 'ionic-angular';
import quotes from '../../data/quotes';
import { QuotesPage } from '../quotes/quotes';

@Component({
  selector: 'page-library',
  templateUrl: 'library.html'
})
export class LibraryPage {
  quoteCollection: { category: string, quotes: Quote[], icon: string}[];
  quotesPage= QuotesPage;
  ngOnInit() {
    this.quoteCollection = quotes;
  }
}
