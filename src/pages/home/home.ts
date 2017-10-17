import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PickupPage } from '../pickup/pickup'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  gotoPickup(){
    this.navCtrl.push(PickupPage);
  }
}
