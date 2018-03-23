import { Component } from '@angular/core';
import { ApplicationRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IBeacon, IBeaconPluginResult, Beacon } from '@ionic-native/ibeacon';
import { Observable } from "rxjs/Rx";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  observableRegion:Observable<IBeaconPluginResult>
  intervalId:number;
  beacons:Beacon[]

  constructor(private applicationRef: ApplicationRef, public navCtrl: NavController) {
  }

  startRanging(){
    //TODO WORKSHOP
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