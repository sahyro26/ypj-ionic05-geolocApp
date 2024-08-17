import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  currentCoordinates: { latitude: number; longitude: number } | null = null;

  constructor() {}

  async getCurrentPosition() {
    try {
      const position = await Geolocation.getCurrentPosition();
      this.currentCoordinates = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };
    } catch (error) {
      console.error('Error getting location', error);
    }
  }

  async openWebPage() {
    await Browser.open({ url: 'https://ionicframework.com' });
  }
  
 

}
