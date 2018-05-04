import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CommentPage} from "../comment/comment";
import {TimelinePage} from "../timeline/timeline";
import {RecordPage} from "../record/record";

/**
 * Generated class for the StudentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-student',
  templateUrl: 'student.html',
})
export class StudentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentPage');
  }

  postComment(){
    this.navCtrl.push(CommentPage);
  }

  timeline(){
    this.navCtrl.push(TimelinePage)
  }


  records(){
    this.navCtrl.push(RecordPage);
  }
}
