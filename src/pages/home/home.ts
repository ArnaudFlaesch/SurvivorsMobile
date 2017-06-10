import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

import * as THREE from "three";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {

  public title: String;

  constructor(public navCtrl: NavController) {
    this.title = "Survivors - Page d'accueil";
  }
}
