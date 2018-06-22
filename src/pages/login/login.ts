// import { Component } from '@angular/core';
// import { IonicPage, NavController, NavParams } from 'ionic-angular';
// //import {HomePage} from "../home/home";
// import {RegisterPage} from "../register/register";
// import {MyApp} from "../../app/app.component";
//
// /**
//  * Generated class for the LoginPage page.
//  *
//  * See http://ionicframework.com/docs/components/#navigation for more info
//  * on Ionic pages and navigation.
//  */
//
// @IonicPage()
// @Component({
//   selector: 'page-login',
//   templateUrl: 'login.html',
// })
// export class LoginPage {
//
//   constructor(public navCtrl: NavController, public navParams: NavParams) {
//   }
//
//   ionViewDidLoad() {
//     console.log('ionViewDidLoad LoginPage');
//   }
//
//   login(){
//     this.navCtrl.push(MyApp);
//
//   }
//
//   register(){
//     this.navCtrl.push(RegisterPage);
//   }
// }
import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {ForgetPasswordPage} from "../forget-password/forget-password";
import {RegisterPage} from "../register/register";
import {LocalStorageProvider} from "../../providers/local-storage/local-storage";
// import {HomePage} from "../home/home";
import {NewPage} from "../new/new";
import {HttpClient} from "@angular/common/http";
import {Http} from "@angular/http";

/**
 * Generated class for the SignInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'login.html',
})
export class LoginPage {
  text:any;

    username:"";
    pwd:"";

  constructor(public navCtrl: NavController, public navParams: NavParams,private toastCtrl:ToastController,
              private alertCtrl:AlertController,private storage:LocalStorageProvider,
              public http:HttpClient,
              public http1:Http) {
    // this.signIn.username="";
  }
  // toSignIn(){
  //   let account = this.storage.get('Account',null);
  //   let toast = this.toastCtrl.create({
  //     message:'用户名或者密码不正确',
  //     duration:3000
  //   });
  //   if (this.signIn.phone!=account.phone || this.signIn.password!=account.password){
  //     toast.present();
  //   }
  //   else {
  //     this.navCtrl.setRoot(NewPage);
  //   }
  // }
  toForgotPassword(){
    this.navCtrl.push(ForgetPasswordPage);
  }
  toRegister(){
    this.navCtrl.push(RegisterPage);
  }
  postdata(){
    var data ={};
    this.http.post('http://111.230.252.141/ajax/api/login?username='+this.username+'&pwd='+this.pwd,{})
      .subscribe(
        (val) => {
          console.log("POST call succesful value returned in body",
            val);
          if(val['success']==false){
            let alert = this.alertCtrl.create({
              title: '登录失败!',
              subTitle: '你的用户名或密码错误!',
              buttons: ['OK']
            });
            alert.present();
            this.navCtrl.setRoot(LoginPage);
          }
          else{
            var class_name=val['class_name'];
            this.storage.set('classname',class_name);
            var Tuid=val['uid'];
            this.storage.set('Tuid',Tuid);
            this.navCtrl.setRoot(NewPage);
          }
        },
        response => {
          console.log("POST call in error", response);
        },
        () => {
          // this.navCtrl.setRoot(NewPage);
        });
  }
  // postdata1(){
  //   var data ={username:'Admin',pwd:'123456'};
  //   this.http1.post('http://111.230.252.141/ajax/api/login',data)
  //     .map(res =>
  //       res.json())
  // }
}
