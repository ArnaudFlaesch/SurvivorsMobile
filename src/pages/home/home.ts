import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {

  private title: String;

  constructor(public navCtrl: NavController) {
    this.title = "Survivors - Page d'accueil";
  }
}
