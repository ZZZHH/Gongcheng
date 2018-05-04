import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ActionSheetController } from 'ionic-angular';
import {ImagePicker, ImagePickerOptions} from '@ionic-native/image-picker';
import { Camera, CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public actionSheetCtrl:ActionSheetController,
              public imagePicker: ImagePicker,
              public camera: Camera) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  avatar;
  getImage(){
    const options: ImagePickerOptions = {
      maximumImagesCount:3,
      width: 75,
      height: 75,
      quality: 100
    };
    this.imagePicker.getPictures(options).then((results) => {
      for (var i = 0; i < results.length; i++) {
        console.log('Image URI: ' + results[i]);
        this.avatar=results[i];
      }
    }, (err) => { });
  }

  getPhoto(){

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      this.avatar=imageData;
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      //let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });
  }

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
