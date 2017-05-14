import {NgModule, ErrorHandler} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {IonicApp, IonicModule, IonicErrorHandler} from "ionic-angular";
import {SurvivorsApplication} from "./app.component";

import {HomePage} from "../pages/home/home";

import {StatusBar} from "@ionic-native/status-bar";
import {SplashScreen} from "@ionic-native/splash-screen";
import {RegistrationPage} from "../pages/registration/registration";
import {LoginPage} from "../pages/login/login";
import {AuthService} from "../services/AuthService";
import {HTTP} from "@ionic-native/http";
import {IonicStorageModule} from "@ionic/storage";
import {LogoutPage} from "../pages/logout/logout";
import {Camera} from "@ionic-native/camera";
import {GoogleMaps} from "@ionic-native/google-maps";
import {Geolocation} from "@ionic-native/geolocation";
import {MapPage} from "../pages/map/map";
import {CameraPage} from "../pages/camera/camera";
import {CameraPreview} from "@ionic-native/camera-preview";
import {Diagnostic} from "@ionic-native/diagnostic";

@NgModule({
  declarations: [
    SurvivorsApplication,
    CameraPage,
    LoginPage,
    LogoutPage,
    MapPage,
    RegistrationPage,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(SurvivorsApplication),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    SurvivorsApplication,
    CameraPage,
    LoginPage,
    LogoutPage,
    MapPage,
    RegistrationPage,
    HomePage
  ],
  providers: [
    AuthService,
    CameraPreview,
    Diagnostic,
    Geolocation,
    GoogleMaps,
    HTTP,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
