import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController,NavParams } from 'ionic-angular';
import {InvitePage} from "../invite/invite";
import {LoginPage} from "../login/login";
import {SignPage} from "../sign/sign";
import {RecordAllPage} from "../record-all/record-all";
import {ProfilePage} from "../profile/profile";
import {CommentPage} from "../comment/comment";

/**
 * Generated class for the SettingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl:ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }

  invite(){
    this.navCtrl.push(InvitePage);
  }

  logout(){
    let modal = this.modalCtrl.create(LoginPage);
    modal.present();
    //this.navCtrl.push(LoginPage);
  }

  sign(){
    this.navCtrl.push(SignPage);
  }
  records(){
    this.navCtrl.push(RecordAllPage);
  }
  profile(){
    this.navCtrl.push(ProfilePage);
  }
  postComment(){
    this.navCtrl.push(CommentPage);
  }
}
