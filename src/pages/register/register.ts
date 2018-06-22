import {Component, ViewChild} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';
import {AuthenticationCodeProvider} from "../../providers/authentication-code/authentication-code";
import {LocalStorageProvider} from "../../providers/local-storage/local-storage";
import {getErrorLogger} from "@angular/core/src/errors";
import set = Reflect.set;
// import {SignInPage} from "../sign-in/sign-in";
import {HomePage} from "../home/home";
import {NewPage} from "../new/new";
import { Http, Response } from '@angular/http';
import { HTTP } from '@ionic-native/http';
import {HttpClient} from "@angular/common/http";

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  @ViewChild('registerSlides') registerSlides:any;
  text:any;
  register = {
    phone:'',
    email:'',
    shopName:'',
    password:'',
    confirmPassword:'',
    code:'',
    codeMark:1,

  };
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private authenticationCodeService:AuthenticationCodeProvider,
              private storage:LocalStorageProvider,
              public toastCtrl: ToastController,
              public loadingCtrl: LoadingController,
              public http:HttpClient) {
    // var data ={phone:'register.phone',password:'register.password'};
    // this.http.post('https://111.230.252.141/?/ajax/api/login',data)
    //   .subscribe(
    //     (val) => {
    //       console.log("POST call successful value returned in body",
    //         val);
    //     },
    //     response => {
    //       console.log("POST call in error", response);
    //     },
    //     () => {
    //       console.log("The POST observable is now completed.");
    //     });
  }
  postdata(){
    var data ={username:'Admin',pwd:'123456'};
    this.http.post('http://111.230.252.141/ajax/api/login',data)
      .subscribe(
        (val) => {
          console.log("POST call succesful value returned in body",
            val);
        },
        response => {
          console.log("POST call in error", response);
        },
        () => {
          console.log("The POST observable is now completed.");
        });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
    this.registerSlides.lockSwipes(true);
  }
  next(){
    this.registerSlides.lockSwipes(false);
    this.registerSlides.slideNext();
    this.registerSlides.lockSwipes(true);

  }
  previous() {
    this.registerSlides.lockSwipes(false);
    this.registerSlides.slidePrev();
    this.registerSlides.lockSwipes(true);

  }
  send(){
    this.toastCtrl.create({
      message: this.authenticationCodeService.createCode(4),
      duration: 1500,
    }).present();
    //console.log(this.authenticationCodeService.createCode(4));
    //没有使用短信云服务发送验证码，先在控制台输出生成的验证码
  }
  validateCode(){
    this.next();
    /*if(this.authenticationCodeService.validate(this.register.code)){
      this.next();
      this.register.codeMark=1;
  }
    else{
      console.log('短信验证码不正确或者已过期');
      this.register.codeMark=2;
    }*/
  }
  // saveData() {
  //   let acccout = {
  //     phone: this.register.phone,
  //     password: this.register.password,
  //
  //   };
  //   let shop = {
  //     isLogin: false,
  //     shopName: this.register.shopName,
  //     email: this.register.email,
  //     registerTime: new Date().getTime(),
  //     shopSimpleName: "",
  //     shopPhone: "",
  //     type: "",
  //     bossName: "",
  //     phone: this.register.phone,
  //   };
  //   this.storage.set('Account', acccout);
  //   this.storage.set('Shop', shop);
  //   this.next();
  //   let loader = this.loadingCtrl.create({
  //     spinner: 'bubbles',
  //     content: "注册成功，正在跳转......"
  //   });
  //   loader.present();
  //   setTimeout(()=>{
  //     loader.dismiss();
  //     this.navCtrl.push(NewPage);
  //   },1000);
  // }

}
