import { Component } from '@angular/core';
import { Platform, Events } from 'ionic-angular';
import { StatusBar, Splashscreen, DeviceMotion, AccelerationData } from 'ionic-native';

import { HomePage } from '../pages/home/home';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = HomePage;
  motionSubscription: any;

  constructor(platform: Platform, public events: Events) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();

      this.motionSubscription = DeviceMotion.watchAcceleration().subscribe((acceleration: AccelerationData) => {
        this.events.publish('motion:detected', acceleration);
      });
    });
  }
}
