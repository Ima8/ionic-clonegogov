import { CancelPage } from './../cancel/cancel';
import { CompletePage } from './../complete/complete';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ActivePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-active',
  templateUrl: 'active.html',
})
export class ActivePage {
  state: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.state = "active";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActivePage');
  }
  gotoComplete() {
    this.navCtrl.push(CompletePage)
  }
  gotoCancel() {
    this.navCtrl.push(CancelPage)
  }
}
