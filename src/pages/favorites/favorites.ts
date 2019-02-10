import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, MenuController } from 'ionic-angular';
import { QuotesService } from '../../services/quotes';
import { Quote } from '../../data/quote.interface';
import { QuotePage } from '../quote/quote';
import { modelGroupProvider } from '@angular/forms/src/directives/ng_model_group';

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html'
})
export class FavoritesPage {

  quotes: Quote[];
  constructor(private quoteService: QuotesService,
    private modalCtrl: ModalController,
    private menuCtrl: MenuController) {

  }
  ionViewWillEnter() {
    this.quotes = this.quoteService.getFavoriteQuotes();
  }
  onViewQuote(quote: Quote) {
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
    modal.onDidDismiss((remove: boolean)=> {
      //console.log(remove);
      if(remove)
      {
        this.onRemoveFromFavorites(quote);
      }

    });  
    //modal.willLeave.subscribe( (remove: boolean) => console.log(remove));
  }

  onRemoveFromFavorites(quote: Quote) {
    this.quoteService.removeQuoteFromFavorites(quote);
        this.quotes = this.quoteService.getFavoriteQuotes();
        const position = this.quotes.findIndex((quoteEl: Quote)=> {
          return quoteEl.id == quote.id;
        });
        this.quotes.splice(position, 1);
  }
  onOpenMenu() {
    this.menuCtrl.open()
  }

}
