import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tapped = 0;
  pressed = 0;
  constructor(public navCtrl: NavController) {

  }
  didReset(resetType : string) {
    switch (resetType) {
      case 'tap':
        this.tapped = 0;
        break;
      case 'press':
        this.pressed = 0;
        break;
      default :
        this.pressed = 0;
        this.tapped = 0;
    }
  }
  onTap() {
    console.log("Tapped");
    this.tapped++;
  }
  onPress() {
    console.log("Pressed");
    this.pressed++;
  }
  didWin() {
    return this.pressed == 4 && this.tapped ==2;
  }
}
