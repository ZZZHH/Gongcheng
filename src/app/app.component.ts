import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import {HomePage} from "../pages/home/home";
//import {InvitePage} from "../pages/invite/invite";
import {SettingPage} from "../pages/setting/setting";
import {StudentPage} from "../pages/student/student";

@Component({
  //templateUrl: 'app.html'
  template: `    
  <ion-tabs>
  <ion-tab tabIcon="home" tabTitle="首页" [root]="tab1"></ion-tab>
    <ion-tab tabIcon="leaf" tabTitle="签到" [root]="tab2"></ion-tab>
    <ion-tab tabIcon="settings" tabTitle="设置" [root]="tab3"></ion-tab>
    </ion-tabs>`
})
export class MyApp {
  tab1: any;
  tab2: any;
  tab3:any;

  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    this.tab1 = HomePage;
    this.tab2 = StudentPage
    this.tab3 = SettingPage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
