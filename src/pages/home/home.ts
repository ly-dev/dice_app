import { Component } from '@angular/core';

import { NavController, Events } from 'ionic-angular';

declare var dice3d: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pagedata: any = {};

  constructor(public navCtrl: NavController, public events: Events) {
    this.events.subscribe('shake:detected', () => {
      console.log('shaking received!');
      this.rolling();
    });
  }

  rolling() {
    dice3d(6, Math.floor(Math.random() * 6) + 1);
  }
}
