import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { ActivePage } from './../pages/active/active';
import { CompletePage } from './../pages/complete/complete';
import { CancelPage } from './../pages/cancel/cancel';

import { PickupPage } from './../pages/pickup/pickup'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SMS } from '@ionic-native/sms';
import { SocialSharing } from '@ionic-native/social-sharing';


import { FirebaseStoreProvider } from '../providers/firebase-store/firebase-store';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps } from '@ionic-native/google-maps';
import { Facebook } from '@ionic-native/facebook';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ActivePage,
    CompletePage,
    CancelPage,
    PickupPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ActivePage,
    CompletePage,
    CancelPage,
    PickupPage
  ],
  providers: [
    StatusBar,
    SMS,
    SplashScreen,
    SocialSharing,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    FirebaseStoreProvider,
    Geolocation,
    GoogleMaps,
    Facebook
  ]
})
export class AppModule { }
