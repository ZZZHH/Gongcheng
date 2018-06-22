import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RestProvider} from "../../providers/rest/rest";
import {LocalStorageProvider} from "../../providers/local-storage/local-storage";
import {Http} from "@angular/http";

/**
 * Generated class for the KaoqingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-kaoqing',
  templateUrl: 'kaoqing.html',
})
export class KaoqingPage {
  items = [
    '上课预通知：2018.06.10：东三智能技术',
    '上课预通知：2018.06.10：数计2工程英语',
    'Tetris',
    'Donkey Kong III',
    'GoldenEye 007',
    'Doom',
    'Fallout',
    'GTA',
    'Halo'
  ];
  users:any;
  classesname:"";
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public restProvider: RestProvider,
              private storage:LocalStorageProvider,
              public http1:Http) {
    this.classesname=this.storage.get('classname','null');
    this.getUsers();
  }
  getUsers() {
    this.restProvider.getUsers()
      .then(data => {
        this.users = JSON.stringify(data);
        console.log(this.users);
      });
  }
  // getCourses1(){
  //   return new Promise(resolve => {
  //     this.http1.get('http://111.230.252.141/ajax/api/call_roll_state?course_name='+this.classesname,{})
  //       .subscribe(data => {
  //         var $ddd = data.json();
  //         resolve($ddd['result']);
  //         this.courses = $ddd['result'];
  //       }, err => {
  //         console.log(err);
  //       });
  //   });
  // }
  ionViewDidLoad() {
    console.log('ionViewDidLoad KaoqingPage');
  }
}
