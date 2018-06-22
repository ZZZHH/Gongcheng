import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import {RestProvider} from "../../providers/rest/rest";
import {Http} from "@angular/http";

/**
 * Generated class for the CoursePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-course',
  templateUrl: 'course.html',
})
export class CoursePage {
  courses:any;
  aaa:any;
  apiUrl1 = 'http://111.230.252.141/ajax/api/v1.0';
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public Http:HttpClient,
              public http1:Http,
              public restProvider: RestProvider) {
    // this.getCourses()
  }
  // getCourses(){
  //   return new Promise(resolve => {
  //     this.restProvider.getCourses()
  //       .then(data => {
  //         this.courses = data;
  //         console.log(this.courses);
  //       });
  //   });
  // }
  getCourses(){
    return new Promise(resolve => {
      this.getCourses1()
        .then(data => {
          this.courses = data;
          console.log(this.courses);
        });
    });
  }
  getCourses1(){
    return new Promise(resolve => {
      this.http1.get('http://111.230.252.141/ajax/api/v1.0/course_time_table?class_name='+this.aaa,{})
        .subscribe(data => {
          var $ddd = data.json();
          resolve($ddd['result']);
          // this.courses = $ddd['result'];
        }, err => {
          console.log(err);
        });
    });
  }
  // getCourses(){
  //   return new Promise(resolve => {
  //     this.http1.get(this.apiUrl1+'/course_time_table?class_name=17专硕1班',{})
  //       .subscribe(data => {
  //         resolve(data.json());
  //       }, err => {
  //         console.log(err);
  //       });
  //   });
  // }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CoursePage');
  }
}
