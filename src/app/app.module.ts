import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    //LoginPage,
    //RegisterPage,
    //StudentPage,
    //CommentPage,
    //TimelinePage,
    //CreatePage,
    //InvitePage,
    //InviteModePage
  ],
  imports: [
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
    IonicModule.forRoot(MyApp,{
      backButtonText: '',
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
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
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ImagePicker,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
