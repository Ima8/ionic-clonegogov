import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { HistoryPage } from './../history/history';
import { Geolocation } from '@ionic-native/geolocation';
import { Marker, MarkerOptions, LatLng } from '@ionic-native/google-maps';
declare var google;

@Component({
  selector: 'page-pickup',
  templateUrl: 'pickup.html',
})
export class PickupPage {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  loading: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation, public loadingCtrl: LoadingController, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PickupPage');
    this.loadMap();
  }
  gotoHistory() {
    this.navCtrl.push(HistoryPage)
  }
  loadMap() {

    let locationOptions = { timeout: 10000, enableHighAccuracy: true };

    this.geolocation.getCurrentPosition(locationOptions).then(
      (position) => {
        let myPos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        let options = {
          center: myPos,
          zoom: 14
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, options);
        this.addMarker(myPos, "Mein Standort!");
      },
      (error) => {
        this.loading.dismiss().then(() => {
          this.showToast('Location not found. Please enable your GPS!');

          console.log(error);
        });
      }
    )
  }
  showToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }
  addMarker(position, content) {
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: position
    });

    this.addInfoWindow(marker, content);
    return marker;
  }
  addInfoWindow(marker, content) {

    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });

  }
}
