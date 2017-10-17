import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CancelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cancel',
  templateUrl: 'cancel.html',
})
export class CancelPage {
  state: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.state = "cancelled";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CancelPage');
  }

}
