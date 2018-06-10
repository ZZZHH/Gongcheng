import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {AuthenticationCodeProvider} from "../../providers/authentication-code/authentication-code";
import {LocalStorageProvider} from "../../providers/local-storage/local-storage";

/**
 * Generated class for the ForgetPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forget-password',
  templateUrl: 'forget-password.html',
})
export class ForgetPasswordPage {
  forget={
    phone:"",
    codeMark:1,
    code:"",
    password:"",
    repassword:"",
  }
  @ViewChild('forgetPasswordSlides') forgetPasswordSlides:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private authenticationCodeService:AuthenticationCodeProvider,
              private storage:LocalStorageProvider,
              private toastCtrl:ToastController,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgetPasswordPage');
    this.forgetPasswordSlides.lockSwipes(true);
  }
  next(){
    this.forgetPasswordSlides.lockSwipes(false);
    this.forgetPasswordSlides.slideNext();
    this.forgetPasswordSlides.lockSwipes(true);

  }
  previous() {
    this.forgetPasswordSlides.lockSwipes(false);
    this.forgetPasswordSlides.slidePrev();
    this.forgetPasswordSlides.lockSwipes(true);

  }
  send(){
    console.log(this.authenticationCodeService.createCode(4));
    //没有使用短信云服务发送验证码，先在控制台输出生成的验证码
  }
  validateCode(){
    if(this.authenticationCodeService.validate(this.forget.code)){
      this.next();
      this.forget.codeMark=1;
    }
    else{
      console.log('短信验证码不正确或者已过期');
      this.forget.codeMark=2;
    }
  }
  save(){
    let account={
      phone:this.forget.phone,
      password:this.forget.password
    }
    this.storage.set("Account",account);
    let toast = this.toastCtrl.create({
      message:'密码修改成功',
      duration:3000
    });
    toast.present();
  }
}
