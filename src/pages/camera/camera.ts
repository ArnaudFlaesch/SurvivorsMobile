import { Component } from "@angular/core";
import { ToastController } from "ionic-angular";
import {Diagnostic} from "@ionic-native/diagnostic";
import {CameraPreview} from "@ionic-native/camera-preview";

declare var cordova: any;

@Component({
  selector: "page-camera",
  templateUrl: "camera.html",
  providers: [CameraPreview, Diagnostic]
})
export class CameraPage {

  constructor(public cameraPreview: CameraPreview, public toastCtrl: ToastController, public diagnostic: Diagnostic) {

    this.diagnostic.isCameraAuthorized().then((authorized) => {
      if (authorized) {
        this.cameraPreview.startCamera({ camera: "rear", y: 60, toBack: false, width: window.innerWidth, height: window.innerHeight - 60 });
        this.cameraPreview.show();
      }
      else {
        this.diagnostic.requestCameraAuthorization().then((status) => {
          if (status === this.diagnostic.permissionStatus.GRANTED) {
            this.cameraPreview.startCamera({ camera: "rear", y: 60, toBack: false, width: window.innerWidth, height: window.innerHeight - 60 });
            this.cameraPreview.show();
          }
          else {
            this.toastCtrl.create(
              {
                message: "Cannot access camera",
                position: "bottom",
                duration: 5000
              }
            ).present();
          }
        });
      }
    });
  }

  public hideCamera() {
    this.cameraPreview.hide()
      .then(camera => {
        console.log("Camera hidden " + camera);
      })
      .catch(error => {
        console.log("Error " + error.message);
      });
  }
}
