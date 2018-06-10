import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the LocalStorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocalStorageProvider {
  private storage = window.localStorage;
  get(key:string,defaultValue:any):any{
    let value:any = this.storage.getItem(key);
    try {
      value = JSON.parse(value);
    }catch (error){
      value=null;
    }
    if (value==null && defaultValue){
      value=defaultValue;
    }
    return value;
  }
  set(key:string,value:any){
    this.storage.setItem(key,JSON.stringify(value));
  }
  remove(key:string){
    this.storage.removeItem(key);
  }

}
