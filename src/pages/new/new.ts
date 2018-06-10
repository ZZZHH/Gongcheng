import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams,Tabs } from 'ionic-angular';
import {LoginPage} from "../login/login";
import {HomePage} from "../home/home";
import {SettingPage} from "../setting/setting";
import {StudentPage} from "../student/student";

@IonicPage()
@Component({
  selector: 'page-learn-tab-page',
  templateUrl: 'new.html',
})
export class NewPage {
  @ViewChild('mainTabs') tabs: Tabs;
  tab1Root: any = HomePage;
  tab2Root: any = StudentPage;
  tab3Root: any = SettingPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  ionViewDidLoad() {
  }

}
