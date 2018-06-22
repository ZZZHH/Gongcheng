import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the QingjiaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qingjia',
  templateUrl: 'qingjia.html',
})
export class QingjiaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QingjiaPage');
  }
  shangchuan(){
    let alert = this.alertCtrl.create({
      title: '请假成功!',
      subTitle: '已上传签到数据!',
      buttons: ['OK']
    });
    alert.present();
  }

}
