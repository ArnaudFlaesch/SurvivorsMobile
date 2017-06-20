/// <reference path="WikitudePlugin.d.ts" />

import {Component, ViewChild} from "@angular/core";
import {Nav, Platform} from "ionic-angular";
import {StatusBar} from "@ionic-native/status-bar";
import {SplashScreen} from "@ionic-native/splash-screen";

import {HomePage} from "../pages/home/home";
import {LoginPage} from "../pages/login/login";
import {LogoutPage} from "../pages/logout/logout";
import {MapPage} from "../pages/map/map";
import {ARPage} from "../pages/ar/ar";
import {InventoryPage} from "../pages/inventory/inventory";

@Component({
  templateUrl: "app.html"
})
export class SurvivorsApplication {
  @ViewChild(Nav) protected nav: Nav;
  protected rootPage: any = LoginPage;
  protected pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    this.pages = [
      { title: "Personnage", component: HomePage },
      { title: "Inventaire", component: InventoryPage },
      { title: "Carte", component: MapPage },
      { title: "RA", component: ARPage },
      { title: "Déconnexion", component: LogoutPage }
    ];
  }

  private initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      /** Enter your Wikitude (trial) License Key here. You can register and download your free license key here: http://www.wikitude.com/developer/licenses */
      // WikitudePlugin._sdkKey = "ogn33DDCECXlvkeFmNeib5cyLcaSR6U5lDuLQ4Rt5istNCjVlhXdzjllFHwlUp2zi9JChae8H4PhdaCjqFfm/3BlflyxWaOAWDo1SZKN5pjDwSn5C8UdJLZbF4jtHCOWX6s9o4nbBHUuYGeyX/uWJP7xt1SU53b1u+t/9aXtbtBTYWx0ZWRfX33Tu35AETCMKWnbmARNttHiVFvhJYLh/DtyeZKPLeMShA8idtYy2GGQzVfgAA6w5UmgS0OfobOR+ty3N4xKUFPTuCV0n+XEjBYeHgw/W4zpq8FHnwZaDX+GbIy+Lzapd+SkO/iX0O3x/wpIUQ7JYpM6S9Dgbk0zs4o1iT3aIe9nlhggMz6VhF9oUQXogbKRFPYbfKw4cYs5lpDwnv4v0jDIQsa3BRewQtASZuo1h5lDacF0Dcn8yKw30unVXp779QvegxAuGc9vxf027GnTf8VWuh0L+AHJLY6s7Om79SJJTLH2l4Ca+OrqlsFRFlLe5ZUyC6jjqKj4Irkxu6OilfZe4I6WwRT5EXl1ur2DQfzMZEUJ9e4EWaCNk5ToWcxNYBm3Skpncsd3jOExiRCbpEhflpgI8iEClHc+VBGTW4G2f8xYmsWkqW0jGF2LR+ka8UsYK8e3YKmp9zH90zEyv+F7LYwPzYh/bhPOyqxzuy6lDVtnpJ1+qfqCCbgU01/TMCqHewkcnhZePUXVQgizqRee7LaDvDXN/w==";
      WikitudePlugin._sdkKey = "s1FGx2o3YsVXcEX6CEULHmCRMCGfjpCC0Lw1ETnM3dxHALDT+Mf5yhZ0rrbx6hPCVhuTxbxnz3WyKCnhkmzxMG+T/rkleiPGtEPV9hSxc0++rCXnICgufD/hJ3wi9eGtrB8eGnsXli221BO9yAV9ra9XWic2xkoE8tYyTCTEn81TYWx0ZWRfXwCkwYnFBccVP71NtoOi4z6vMM+lcC8Ix4sNiXsNmXdtSp/Q9wQejoywa7iqEecbzcWaICxABJi9iBe3F5lVUzQAHdj0+Q2tSlcT/LVHwN/36OGgdiKjFMl65V8Z+Xe7AQXC7FGlJDCAZYDY2eBUdEQOYL7I9D/kLJz8TkMBYuiwO27O5d6g362gZeiaNQt1zzRjBpO94jNBnOsP1IZj4Eeo3OFZJvOqaYCox8kK+qgOGBKUsO8N0t6IJspqtiPepl4I2tlkeqoUgzcDFCX+Et2qnZLRZruDTt2sbXuZq39uQDhMF67+mB/XAVgFMbGWOaxfBB/2pPhuE9kXYuF6N8y13qP51nv+ZaHRob3nO0GURPIuOUnyTc/rGF9nRectQQ70oOyeQYnrtdxKohxkzcRGIfAn333pL2IZmKBQn9adSFG8gLcWK7R62+2dlfAlIAwmhBKOElLs1k7Iefg/K00AwQauA2FCgHL7psrOxWa1ajUMI0KbGxM=";
      /** Check if your device supports AR */
      WikitudePlugin.isDeviceSupported(
        function(success) {
          console.log("Your platform supports AR/Wikitude. Have fun developing!!");
        },
        function(fail) {
          console.log("Your platform failed to run AR/Wikitude: " + fail);
        },
        [WikitudePlugin.FeatureGeo]
      );

      /**
       * The Wikitude AR View creates it's own context. Communication between the main Ionic App and Wikitude SDK works
       * through the function below for the direction Ionic2 app --> Wikitude SDK
       * For calls from Wikitude SDK --> Ionic2 app see the captureScreen example in
       * WikitudeIonic2StarterApp/www/assets/3_3dModels_6_3dModelAtGeoLocation/js/3dmodelatgeolocation.js
       */
      // set the function to be called, when a "communication" is indicated from the AR View
      WikitudePlugin.setOnUrlInvokeCallback(function(url) {

        // this an example of how to receive a call from a function in the Wikitude SDK (Wikitude SDK --> Ionic2)
        if (url.indexOf("captureScreen") > -1) {
          WikitudePlugin.captureScreen(
            (absoluteFilePath) => {
              console.log("snapshot stored at:\n" + absoluteFilePath);

              // this an example of how to call a function in the Wikitude SDK (Ionic2 app --> Wikitude SDK)
              WikitudePlugin.callJavaScript("World.testFunction('Screenshot saved at: " + absoluteFilePath + "');");
            },
            (errorMessage) => {
              console.log(errorMessage);
            },
            true, null
          );
        } else {
          alert(url + "not handled");
        }
      });

      /**
       * Define the generic ok callback
       */
      WikitudePlugin.onWikitudeOK = function() {
        console.log("Things went ok.");
      };

      /**
       * Define the generic failure callback
       */
      WikitudePlugin.onWikitudeError = function() {
        console.log("Something went wrong");
      };
    });
  }

  public openPage(page) {
    this.nav.setRoot(page.component)
      .then(openedPage => {
        console.log("Open page OK");
      })
      .catch(error => {
        console.log("Error " + error.message);
      });
  }
}
