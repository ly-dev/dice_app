import { Component } from '@angular/core';

import { NavController, Events } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pagedata: any = {};

  constructor(public navCtrl: NavController, public events: Events) {
    this.pagedata.motions = [];

    this.events.subscribe('motion:detected', (acceleration) => {
      this.pagedata.motions.splice(0,0,acceleration);
    });
  }
}
