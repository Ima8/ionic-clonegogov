import { SocialSharing } from '@ionic-native/social-sharing';
import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { PickupPage } from '../pickup/pickup'
import { SMS } from "@ionic-native/sms";
import { ActionSheetController } from 'ionic-angular'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private alertCtrl: AlertController,
    private sms: SMS,
    public actionSheetCtrl: ActionSheetController,
    private socialSharing: SocialSharing,
  ) {

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
    const actionSheet = this.actionSheetCtrl.create({
      title: 'แนะนำเพื่อนผ่าน.....',
      buttons: [
        {
          text: 'ผ่าน Twitter',
          handler: () => {
            this.socialSharing.shareViaTwitter("Download ninjavan application at GooglePlay or http://aipen.io","","")
          }
        },
        {
          text: 'ผ่าน SMS',
          handler: () => {
            this.showPhone()
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

    actionSheet.present();

  }

  showPhone(){
    const alert = this.alertCtrl.create({
      title: '"Download ninjavan application at GooglePlay or http://aipen.io"',
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
