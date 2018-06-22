import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  apiUrl = 'https://jsonplaceholder.typicode.com';
  apiUrl1 = 'http://111.230.252.141/ajax/api/v1.0';
  constructor(public http: HttpClient,public http1:Http) {
    console.log('Hello RestProvider Provider');
  }
  getUsers() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/users').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  getCourses(){
    return new Promise(resolve => {
      this.http1.get(this.apiUrl1+'/course_time_table?class_name=17专硕1班',{})
        .subscribe(data => {
          var $ddd = data.json();
        resolve($ddd['result']);
      }, err => {
        console.log(err);
      });
    });
  }
  addUser(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/users', JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}
