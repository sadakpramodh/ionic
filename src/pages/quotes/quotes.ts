import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Quote } from "../../data/quote.interface";
import { QuotesService } from "../../services/quotes";
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html'
})
export class QuotesPage {
  quoteGroup: {category: string, quotes: Quote[], icon: string};

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private alertCtrl: AlertController,
     private quotesService: QuotesService) {
    
  }

  ionViewDidLoad() {
    this.quoteGroup = this.navParams.data;
    //Add elvis operator (?) in template to use this approach
    // else use above equation onInit method need not use elvis operator.
  }
  onAddToFavorite(selectedQuote : Quote) {
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure you ant to add the quote?',
      buttons: [
        {
          text: 'yes, go ahead',
          handler:() => {
            this.quotesService.addQuoteToFavorites(selectedQuote);
            //console.log('ok');
          }
        },
        {
          text: 'No, I changed my mind!',
          role: 'cancel',
          handler: () =>{
            console.log('Cancled!');
          }
        }
      ]
    });

    alert.present();
  }
  onRemoveFromFavorite(quote : Quote) {
    this.quotesService.removeQuoteFromFavorites(quote);
  }
  isFavorite(quote: Quote) {
    return this.quotesService.isQuoteFavorite(quote);
  }

}
