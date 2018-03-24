import { Component } from '@angular/core';
import { ApplicationRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IBeacon, Beacon } from '@ionic-native/ibeacon';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  intervalId:number;
  beacons:Beacon[]

  constructor(private applicationRef: ApplicationRef, public navCtrl: NavController) {
  }

  startRanging(){
    //UUID: B9407F30-F5F8-466E-AFF9-25556B57FE6D
    //Identifier: d8fe5f4bd538c9c08c033e4b96ac9a1a

    // Workshop code goes here
  }

  refreshData() {
    if (this.intervalId) {
      clearInterval(this.intervalId)
      this.intervalId = undefined;
    } else {
      this.intervalId = setInterval(() => {
        this.applicationRef.tick()    
      }, 500);
    }
  }
}