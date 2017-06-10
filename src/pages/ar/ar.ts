/// <reference path="../../app/WikitudePlugin.d.ts" />

import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

@Component({
  selector: "page-ar",
  templateUrl: "ar.html"
})
export class ARPage {

  private title: String;

  constructor(public navCtrl: NavController) {
    this.title = "AR View";
  }

  public ionViewDidEnter() {
      let startupConfiguration: any = {"camera_position": "back"};

      WikitudePlugin.loadARchitectWorld(
          function(success) {
            console.log("ARchitect World loaded successfully.");
          },
          function(fail) {
            console.log("Failed to load ARchitect World!");
          },
          "www/assets/3_3dModels_6_3dModelAtGeoLocation/index.html",
          ["geo"], <JSON>startupConfiguration
      );
  }
}
