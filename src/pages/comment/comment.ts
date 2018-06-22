import { Component ,ViewChild,ElementRef} from '@angular/core';
import {IonicPage, NavController, NavParams, ActionSheetController, AlertController} from 'ionic-angular';
//import { Camera } from '@ionic-native/camera';
import { ImagePicker } from '@ionic-native/image-picker';
import {ImagePickerOptions} from "@ionic-native/image-picker";
import { Camera, CameraOptions } from '@ionic-native/camera';
import {Geolocation} from "@ionic-native/geolocation";
import {GeolocationProvider} from '../../providers/geolocation/geolocation';
import {Http} from "@angular/http";
import {LocalStorageProvider} from "../../providers/local-storage/local-storage";
import {HttpClient} from "@angular/common/http";
import {C} from "@angular/core/src/render3";
// import {C, C} from "@angular/core/src/render3";

/**
 * Generated class for the CommentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
declare var BMap;
declare var BMap_Symbol_SHAPE_POINT;
@IonicPage()
@Component({
  selector: 'page-comment',
  templateUrl: 'comment.html',
  providers: [ImagePicker]
})
export class CommentPage {
  @ViewChild('map') map_container: ElementRef;
  map: any;//地图对象
  marker: any;//标记
  // geolocation1: any;
  myIcon: any;
  locname:"";
  kechengname:"";

  checkin_time:'defaultTime';
  checkin_type:'2';
  course_name:'';
  // checkin_grade:'1';
  checkin_uid:'11111';

  classesname:"";
  number:"";
  coursess:any;
  weidu:"";
  jingdu:"";
  // parameter='checkin_time=2018-05-30 20:05:59&checkin_type=2&course_name=英语&checkin_uid=1111';
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public actionSheetCtrl:ActionSheetController,
              public imagePicker: ImagePicker,
              public camera: Camera,
              public geolocation: GeolocationProvider,
              public html5Geolocation: GeolocationProvider,
              public http1:Http,
              public http:HttpClient,
              public storage:LocalStorageProvider,
              private alertCtrl:AlertController) {
    this.classesname=this.storage.get('classname','null');
    this.weidu=this.storage.get('jingdu','null');
    this.html5Geolocation.watchPosition();
    this.myIcon = new BMap.Icon("assets/icon/favicon.ico", new BMap.Size(30, 30));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentPage');
  }
  getUsers1() {
    return new Promise(resolve => {
      this.http1.get('http://111.230.252.141/ajax/api/call_roll_range?loc_name='+this.locname).subscribe(data => {
        var ddd = data.json()['result'];
        console.log(ddd);
        resolve(ddd['result']);
        var randis=data.json()['result']['radius'].split('m',1);
        // var randis=ddd['randis'];
        this.storage.set('radius',randis);
        var jingdu=data.json()['result']['refer_loc'].split(',');
        this.storage.set('jingdu',jingdu);
        // this.users=$ddd['result'];
      }, err => {
        console.log(err);
      });
    });
  }
  getCourses(){
    return new Promise(resolve => {
      this.getCourses1()
        .then(data =>{
          this.coursess = data;
          console.log(this.coursess);
        });
    });
  }
  getCourses1(){
    return new Promise(resolve => {
      this.http1.get('http://111.230.252.141/ajax/api/v1.0/course_time_table?class_name='+this.classesname,{})
        .subscribe(data => {
          var $ddd = data.json();
          resolve($ddd['result']);
          // this.courses = $ddd['result'];
        }, err => {
          console.log(err);
        });
    });
  }
  // getCourses1(){
  //   return new Promise(resolve => {
  //     this.http1.get('http://111.230.252.141/ajax/api/v1.0/course_time_table?class_name='+this.classesname,{})
  //       .subscribe(data => {
  //         var ddd = data.json()['result'];
  //         // resolve($ddd['result']);
  //         this.courses = ddd['result'];
  //         // var randis=data.json()['result']['randis'];
  //         var randis=ddd['randis'];
  //         this.storage.set('randis',randis);
  //         var weidu=data.json()['result']['refer_loc'];
  //         this.storage.set('weidu',weidu);
  //         var jingdu=data.json()['result']['refer_loc'];
  //         this.storage.set('jingdu',jingdu);
  //       }, err => {
  //         console.log(err);
  //       });
  //   });
  // }
  addCourse() {
    let parameter='checkin_time='+this.checkin_time+'&checkin_type=2&course_name='
      +this.course_name+'&checkin_uid='+this.number;
     var lngA = (this.weidu['0']-this.geolocation.longitude);
     var lngB = (this.weidu['1']-this.geolocation.latitude);
     var C = (lngA*lngA+lngB*lngB)^(1/2);
     // console.log(lngA,lngB,C);
     // console.log(this.geolocation.longitude);
    // console.log('----'+this.data);
    console.log(this.course_name);
    console.log(C);
     if (C < 100){
       return new Promise((resolve, reject) => {

         this.http1.post('http://111.230.252.141/ajax/api/call_roll_submit?'+parameter, {})
           .subscribe(res => {
             resolve(res);
             var aa = res.json();
             console.log(res);
             console.log(aa['success']);
             if(aa['success']==true){
               let alert = this.alertCtrl.create({
                 title: '签到成功!',
                 subTitle: '已上传签到数据!',
                 buttons: ['OK']
               });
               alert.present();
             }
           }, (err) => {
             reject(err);
           });
       });
     }
     else {
       let alert = this.alertCtrl.create({
         title: '签到失败!',
         // subTitle: '已上传签到数据!',
         buttons: ['OK']
       });
       alert.present();
     }
  }
  shangke(){
    // this.locname=this.courses.cou
  }
  defaultTime="2018-06-03";
  images=new Array();

  getImage(){
    const options: ImagePickerOptions = {
      maximumImagesCount:3,
      width: 75,
      height: 75,
      quality: 100
    };
    this.imagePicker.getPictures(options).then((results) => {
      for (var i = 0; i < results.length; i++) {
        this.images.push(results[i]);
        console.log('图片URI: ' + results[i]);
      }
    }, (err) => { });
  }

  getPhoto(){

    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
    this.camera.getPicture(options).then((imageData) => {
      console.log("============拍照图片地址===========");
      console.log(imageData);
      this.images.push(imageData);

    }, (err) => {
      // Handle error
    });
  }
  getGeolocation(){
    // this.geolocation.getGeolocation();
    this.geolocation.watchPosition();
  }

  // getpostion(){
  //   this.geolocation.getCurrentPosition().then((resp) => {
  //     resp.coords.latitude;
  //     resp.coords.longitude;
  //   }).catch((error) => {
  //     console.log('Error getting location', error);
  //   });
  //
  //   let watch = this.geolocation.watchPosition();
  //   watch.subscribe((data) => {
  //     // data can be a set of coordinates, or an error (if an error occurred).
  //     data.coords.latitude
  //     data.coords.longitude
  //   });
  // }
  chooseImageType() {
    let actionSheet = this.actionSheetCtrl.create({
      title: '',
      buttons: [
        {
          text: '拍照',
          handler: () => {
            this.getPhoto();
            console.log('拍照 clicked');
          }
        },{
          text: '相册',
          handler: () => {
            this.getImage();
            console.log('相册 clicked');
          }
        },{
          text: '取消',
          role: 'cancel',
          handler: () => {
            console.log('取消 clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
}
