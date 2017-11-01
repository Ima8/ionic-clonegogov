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
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
