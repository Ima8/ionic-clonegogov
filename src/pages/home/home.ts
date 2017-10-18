import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { PickupPage } from '../pickup/pickup'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private alertCtrl: AlertController) {

  }

  alertReg(){
    const alert = this.alertCtrl.create({
      title: 'Member system is close',
      subTitle: "We'll come back soon",
      buttons: ['OK'],
      cssClass:"alertDanger"
    });
    alert.present();
  }
  gotoPickup(){
    this.navCtrl.push(PickupPage);
  }
}
