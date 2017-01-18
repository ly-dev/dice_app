import { Component } from '@angular/core';
import { Platform, Events } from 'ionic-angular';
import { StatusBar, Splashscreen, Shake } from 'ionic-native';

import { HomePage } from '../pages/home/home';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = HomePage;
  shakeWatch: any;

  constructor(platform: Platform, public events: Events) {
    platform.ready().then(() => {
      if (platform.is('cordova')) {
        StatusBar.styleDefault();
        Splashscreen.hide();

        this.shakeWatch = Shake.startWatch(60).subscribe(() => {
          console.log('shaking...');
          this.events.publish('shake:detected');
        });
      }
    });
  }
}
