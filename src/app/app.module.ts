import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule, NavController} from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { ImagePicker } from '@ionic-native/image-picker';
import { Camera } from '@ionic-native/camera';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {LoginPage} from "../pages/login/login";
import {RegisterPage} from "../pages/register/register";
import {StudentPage} from "../pages/student/student";
import {CommentPage} from "../pages/comment/comment";
import {TimelinePage} from "../pages/timeline/timeline";
import {CreatePage} from "../pages/create/create";
import {InvitePage} from "../pages/invite/invite";
import {CommentPageModule} from "../pages/comment/comment.module";
import {LoginPageModule} from "../pages/login/login.module";
import {RegisterPageModule} from "../pages/register/register.module";
import {StudentPageModule} from "../pages/student/student.module";
import {TimelinePageModule} from "../pages/timeline/timeline.module";
import {CreatePageModule} from "../pages/create/create.module";
import {InvitePageModule} from "../pages/invite/invite.module";
import {SettingPage} from "../pages/setting/setting";
import {SettingPageModule} from "../pages/setting/setting.module";
import {RecordPage} from "../pages/record/record";
import {RecordPageModule} from "../pages/record/record.module";
import {SignPageModule} from "../pages/sign/sign.module";
import {SignPage} from "../pages/sign/sign";
import {RecordAllPage} from "../pages/record-all/record-all";
import {RecordAllPageModule} from "../pages/record-all/record-all.module";
import {ProfilePage} from "../pages/profile/profile";
import {ProfilePageModule} from "../pages/profile/profile.module";
import {AuthenticationCodeProvider} from "../providers/authentication-code/authentication-code";
import {LocalStorageProvider} from "../providers/local-storage/local-storage";
import {ForgetPasswordPage} from "../pages/forget-password/forget-password";
import {ForgetPasswordPageModule} from "../pages/forget-password/forget-password.module";
import {HttpModule} from "@angular/http";
import {HttpClientModule} from "@angular/common/http";
import {NewPage} from "../pages/new/new";
import {GeolocationProvider} from "../providers/geolocation/geolocation";
import {HttpSerProvider} from "../providers/http-ser/http-ser";
import {BaiduMapPage} from "../pages/baidu-map/baidu-map";
import {Geolocation} from "@ionic-native/geolocation";
import {BaiduMapPageModule} from "../pages/baidu-map/baidu-map.module";
import {CoursePage} from "../pages/course/course";
import {QingjiaPage} from "../pages/qingjia/qingjia";
import {CoursePageModule} from "../pages/course/course.module";
import {QingjiaPageModule} from "../pages/qingjia/qingjia.module";
import {KaoqingPage} from "../pages/kaoqing/kaoqing";
import {KaoqingPageModule} from "../pages/kaoqing/kaoqing.module";
import {Http} from "@angular/http";
import { RestProvider } from '../providers/rest/rest';
import {AdduserPage} from "../pages/adduser/adduser";
import {AdduserPageModule} from "../pages/adduser/adduser.module";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewPage,
    // QingjiaPage
    // BaiduMapPage
    // LoginPage,
    //RegisterPage,
    //StudentPage,
    //CommentPage,
    //TimelinePage,
    //CreatePage,
    //InvitePage,
    //InviteModePage,
  ],
  imports: [
    QingjiaPageModule,
    CommentPageModule,
    LoginPageModule,
    RegisterPageModule,
    StudentPageModule,
    TimelinePageModule,
    CreatePageModule,
    InvitePageModule,
    SettingPageModule,
    RecordPageModule,
    SignPageModule,
    RecordAllPageModule,
    ProfilePageModule,
    BrowserModule,
    HttpClientModule,
    ForgetPasswordPageModule,
    BaiduMapPageModule,
    CoursePageModule,
    KaoqingPageModule,
    AdduserPageModule,
    HttpModule,
    IonicModule.forRoot(MyApp,{
      backButtonText: '',
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    QingjiaPage,
    CoursePage,
    HomePage,
    LoginPage,
    RegisterPage,
    StudentPage,
    CommentPage,
    TimelinePage,
    CreatePage,
    InvitePage,
    SettingPage,
    RecordPage,
    SignPage,
    RecordAllPage,
    ProfilePage,
    NewPage,
    KaoqingPage,
    AdduserPage,
    // BaiduMapPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ImagePicker,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LocalStorageProvider,
    AuthenticationCodeProvider,
    GeolocationProvider,
    HttpSerProvider,
    Geolocation,
    RestProvider
  ]
})
export class AppModule {}
