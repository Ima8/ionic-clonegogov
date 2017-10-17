import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CompletePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-complete',
  templateUrl: 'complete.html',
})
export class CompletePage {
  state: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.state = "completed";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompletePage');
  }

}
