import { Component ,ViewChild,ElementRef} from '@angular/core';
import { IonicPage, NavController, NavParams,ActionSheetController } from 'ionic-angular';
//import { Camera } from '@ionic-native/camera';
import { ImagePicker } from '@ionic-native/image-picker';
import {ImagePickerOptions} from "@ionic-native/image-picker";
import { Camera, CameraOptions } from '@ionic-native/camera';
import {Geolocation} from "@ionic-native/geolocation";
import {GeolocationProvider} from '../../providers/geolocation/geolocation';
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
  geolocation1: any;
  myIcon: any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public actionSheetCtrl:ActionSheetController,
              public imagePicker: ImagePicker,
              public camera: Camera,
              private geolocation: GeolocationProvider,
              public html5Geolocation: GeolocationProvider) {
    this.html5Geolocation.watchPosition();
    this.myIcon = new BMap.Icon("assets/icon/favicon.ico", new BMap.Size(30, 30));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentPage');
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
