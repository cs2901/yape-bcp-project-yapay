import { Observable } from "tns-core-modules/data/observable";
import { alert } from "tns-core-modules/ui/dialogs";
import { BarcodeScanner } from "nativescript-barcodescanner";

export class HelloWorldModel extends Observable {
  public message: string;
  private barcodeScanner: BarcodeScanner;

  constructor() {
    super();
    this.barcodeScanner = new BarcodeScanner();
  }

  public doRequestCameraPermission() {
    this.barcodeScanner.requestCameraPermission().then(
        function () {
          console.log("Camera permission requested");
        }
    );
  }

  public doScanWithBackCamera() {
    this.scan(false, false);
  }

  private scan(front: boolean, flip: boolean, torch?: boolean, orientation?: string) {
    this.barcodeScanner.scan({
      //cancelLabel: "EXIT. Also, try the volume buttons!", // iOS only, default 'Close'
      cancelLabelBackgroundColor: "#333333", // iOS only, default '#000000' (black)
      //message: "Use the volume buttons for extra light", // Android only, default is 'Place a barcode inside the viewfinder rectangle to scan it.'
      preferFrontCamera: front,     // Android only, default false
      showFlipCameraButton: flip,   // default false
      showTorchButton: torch,       // iOS only, default false
      torchOn: false,               // launch with the flashlight on (default false)
      resultDisplayDuration: 500,   // Android only, default 1500 (ms), set to 0 to disable echoing the scanned text
      orientation: orientation,     // Android only, default undefined (sensor-driven orientation), other options: portrait|landscape
      beepOnScan: true,             // Play or Suppress beep on scan (default true)
      openSettingsIfPermissionWasPreviouslyDenied: true, // On iOS you can send the user to the settings app if access was previously denied
      closeCallback: () => {
        console.log("Scanner closed @ " + new Date().getTime());
      }
    }).then(
        function (result) {
          console.log("--- scanned: " + result.text);
          // Note that this Promise is never invoked when a 'continuousScanCallback' function is provided
          setTimeout(function () {
            // if this alert doesn't show up please upgrade to {N} 2.4.0+
            alert({
              title: "Scan result",
              message: "Format: " + result.format + ",\nValue: " + result.text,
              okButtonText: "OK"
            });
          }, 500);
        },
        function (errorMessage) {
          console.log("No scan. " + errorMessage);
        }
    );
  }
}
