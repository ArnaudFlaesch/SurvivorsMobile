import {Component, ViewChild} from "@angular/core";
import {Nav, Platform} from "ionic-angular";
import {StatusBar} from "@ionic-native/status-bar";
import {SplashScreen} from "@ionic-native/splash-screen";

import {HomePage} from "../pages/home/home";
import {LoginPage} from "../pages/login/login";
import {LogoutPage} from "../pages/logout/logout";
import {MapPage} from "../pages/map/map";

@Component({
  templateUrl: "app.html"
})
export class SurvivorsApplication {
  @ViewChild(Nav) protected nav: Nav;
  protected rootPage: any = HomePage;
  protected pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    this.pages = [
      { title: "Personnage", component: HomePage },
      { title: "Carte", component: MapPage },
      { title: "Déconnexion", component: LogoutPage }
    ];
  }

  private initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  public openPage(page) {
    this.nav.setRoot(page.component);
  }
}
