import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { PickupPage } from '../pickup/pickup'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  isLoggedIn: boolean = false;
  users: any;
  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private fb: Facebook) {
    fb.getLoginStatus()
      .then(res => {
        console.log(res.status);
        if (res.status === "connect") {
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
      })
      .catch(e => console.log(e));
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
  login() {
    this.fb.login(['public_profile', 'user_friends', 'email'])
      .then(res => {
        if (res.status === "connected") {
          this.isLoggedIn = true;
          this.getUserDetail(res.authResponse.userID);
        } else {
          this.isLoggedIn = false;
        }
      })
      .catch(e => console.log('Error logging into Facebook', e));
  }
  logout() {
    this.fb.logout()
      .then(res => this.isLoggedIn = false)
      .catch(e => console.log('Error logout from Facebook', e));
  }
  getUserDetail(userid) {
    this.fb.api("/" + userid + "/?fields=id,email,name,picture,gender", ["public_profile"])
      .then(res => {
        console.log(res);
        this.users = res;
      })
      .catch(e => {
        console.log(e);
      });
  }
}
