import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { PickupPage } from '../pickup/pickup'
import { SMS } from "@ionic-native/sms";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private alertCtrl: AlertController,private sms: SMS) {

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
  invite(){
    const alert = this.alertCtrl.create({
      title: 'Phone number',
      inputs: [
        {
          name: 'phone',
          placeholder: '0827998969'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send SMS',
          handler: data => {
            this.sms.send(data.phone, 'Ninja van download today!');
          }
        }
      ]
    });
    alert.present();
  }
  gotoPickup(){
    this.navCtrl.push(PickupPage);
  }
}
