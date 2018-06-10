import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {QingjiaPage} from "../qingjia/qingjia";
import {BaiduMapPage} from "../baidu-map/baidu-map";
import {CoursePage} from "../course/course";
import {CommentPage} from "../comment/comment";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
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

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }
  constructor(public navCtrl: NavController) {

  }
  qingjia(){
    this.navCtrl.push(QingjiaPage);
  }
  course(){
    this.navCtrl.push(CoursePage);
  }
  postComment(){
    this.navCtrl.push(CommentPage);
  }
}
