"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var dialogs_1 = require("tns-core-modules/ui/dialogs");
var nativescript_barcodescanner_1 = require("nativescript-barcodescanner");
var HelloWorldModel = (function (_super) {
    __extends(HelloWorldModel, _super);
    function HelloWorldModel() {
        var _this = _super.call(this) || this;
        _this.barcodeScanner = new nativescript_barcodescanner_1.BarcodeScanner();
        return _this;
    }
    HelloWorldModel.prototype.doCheckAvailable = function () {
        this.barcodeScanner.available().then(function (avail) {
            dialogs_1.alert({
                title: "Scanning available?",
                message: avail ? "YES" : "NO",
                okButtonText: "OK"
            });
        }, function (err) {
            dialogs_1.alert(err);
        });
    };
    HelloWorldModel.prototype.doCheckHasCameraPermission = function () {
        this.barcodeScanner.hasCameraPermission().then(function (permitted) {
            dialogs_1.alert({
                title: "Has Camera permission?",
                message: permitted ? "YES" : "NO",
                okButtonText: "OK"
            });
        }, function (err) {
            dialogs_1.alert(err);
        });
    };
    HelloWorldModel.prototype.doRequestCameraPermission = function () {
        this.barcodeScanner.requestCameraPermission().then(function () {
            console.log("Camera permission requested");
        });
    };
    HelloWorldModel.prototype.doScanWithBackCamera = function () {
        this.scan(false, true);
    };
    HelloWorldModel.prototype.doScanWithFrontCamera = function () {
        this.scan(true, false);
    };
    HelloWorldModel.prototype.doScanWithTorch = function () {
        this.scan(false, true, true, "portrait");
    };
    HelloWorldModel.prototype.doScanPortrait = function () {
        this.scan(false, true, false, "portrait");
    };
    HelloWorldModel.prototype.doScanLandscape = function () {
        this.scan(false, true, false, "landscape");
    };
    HelloWorldModel.prototype.doContinuousScan = function () {
        this.barcodeScanner.scan({
            reportDuplicates: true,
            continuousScanCallback: function (result) {
                console.log(result.format + ": " + result.text + " @ " + new Date().getTime());
            },
            closeCallback: function () {
                console.log("Scanner closed @ " + new Date().getTime());
            }
        });
    };
    HelloWorldModel.prototype.doContinuousScanMax3 = function () {
        var count = 0;
        var self = this;
        this.barcodeScanner.scan({
            reportDuplicates: false,
            closeCallback: function () {
                console.log("Scanner closed @ " + new Date().getTime());
            },
            continuousScanCallback: function (result) {
                count++;
                console.log(result.format + ": " + result.text + " (count: " + count + ")");
                if (count === 3) {
                    self.barcodeScanner.stop();
                    setTimeout(function () {
                        dialogs_1.alert({
                            title: "Scanned 3 codes",
                            message: "Check the log for the results",
                            okButtonText: "Sweet!"
                        });
                    }, 1000);
                }
            }
        });
    };
    HelloWorldModel.prototype.scan = function (front, flip, torch, orientation) {
        this.barcodeScanner.scan({
            cancelLabel: "EXIT. Also, try the volume buttons!",
            cancelLabelBackgroundColor: "#333333",
            message: "Use the volume buttons for extra light",
            preferFrontCamera: front,
            showFlipCameraButton: flip,
            showTorchButton: torch,
            torchOn: false,
            resultDisplayDuration: 500,
            orientation: orientation,
            beepOnScan: true,
            openSettingsIfPermissionWasPreviouslyDenied: true,
            closeCallback: function () {
                console.log("Scanner closed @ " + new Date().getTime());
            }
        }).then(function (result) {
            console.log("--- scanned: " + result.text);
            setTimeout(function () {
                dialogs_1.alert({
                    title: "Scan result",
                    message: "Format: " + result.format + ",\nValue: " + result.text,
                    okButtonText: "OK"
                });
            }, 500);
        }, function (errorMessage) {
            console.log("No scan. " + errorMessage);
        });
    };
    return HelloWorldModel;
}(observable_1.Observable));
exports.HelloWorldModel = HelloWorldModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0RBQThEO0FBQzlELHVEQUFvRDtBQUNwRCwyRUFBNkQ7QUFFN0Q7SUFBcUMsbUNBQVU7SUFJN0M7UUFBQSxZQUNFLGlCQUFPLFNBRVI7UUFEQyxLQUFJLENBQUMsY0FBYyxHQUFHLElBQUksNENBQWMsRUFBRSxDQUFDOztJQUM3QyxDQUFDO0lBRU0sMENBQWdCLEdBQXZCO1FBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxLQUFLO1lBQ3hDLGVBQUssQ0FBQztnQkFDSixLQUFLLEVBQUUscUJBQXFCO2dCQUM1QixPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUk7Z0JBQzdCLFlBQVksRUFBRSxJQUFJO2FBQ25CLENBQUMsQ0FBQztRQUNMLENBQUMsRUFBRSxVQUFDLEdBQUc7WUFDTCxlQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDYixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSxvREFBMEIsR0FBakM7UUFDRSxJQUFJLENBQUMsY0FBYyxDQUFDLG1CQUFtQixFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsU0FBUztZQUN0RCxlQUFLLENBQUM7Z0JBQ0osS0FBSyxFQUFFLHdCQUF3QjtnQkFDL0IsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJO2dCQUNqQyxZQUFZLEVBQUUsSUFBSTthQUNuQixDQUFDLENBQUM7UUFDTCxDQUFDLEVBQUUsVUFBQyxHQUFHO1lBQ0wsZUFBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sbURBQXlCLEdBQWhDO1FBQ0UsSUFBSSxDQUFDLGNBQWMs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QUFLO1lBQ3RCLE9BQU8sRUFBRSxLQUFLO1lBQ2QscUJBQXFCLEVBQUUsR0FBRztZQUMxQixXQUFXLEVBQUUsV0FBVztZQUN4QixVQUFVLEVBQUUsSUFBSTtZQUNoQiwyQ0FBMkMsRUFBRSxJQUFJO1lBQ2pELGFBQWEsRUFBRTtnQkFDYixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztZQUMxRCxDQUFDO1NBQ0YsQ0FBQyxDQUFDLElBQUksQ0FDSCxVQUFVLE1BQU07WUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFM0MsVUFBVSxDQUFDO2dCQUVULGVBQUssQ0FBQztvQkFDSixLQUFLLEVBQUUsYUFBYTtvQkFDcEIsT0FBTyxFQUFFLFVBQVUsR0FBRyxNQUFNLENBQUMsTUFBTSxHQUFHLFlBQVksR0FBRyxNQUFNLENBQUMsSUFBSTtvQkFDaEUsWUFBWSxFQUFFLElBQUk7aUJBQ25CLENBQUMsQ0FBQztZQUNMLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNWLENBQUMsRUFDRCxVQUFVLFlBQVk7WUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsWUFBWSxDQUFDLENBQUM7UUFDMUMsQ0FBQyxDQUNKLENBQUM7SUFDSixDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBcElELENBQXFDLHVCQUFVLEdBb0k5QztBQXBJWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIjtcbmltcG9ydCB7IGFsZXJ0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xuaW1wb3J0IHsgQmFyY29kZVNjYW5uZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWJhcmNvZGVzY2FubmVyXCI7XG5cbmV4cG9ydCBjbGFzcyBIZWxsb1dvcmxkTW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcbiAgcHVibGljIG1lc3NhZ2U6IHN0cmluZztcbiAgcHJpdmF0ZSBiYXJjb2RlU2Nhbm5lcjogQmFyY29kZVNjYW5uZXI7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmJhcmNvZGVTY2FubmVyID0gbmV3IEJhcmNvZGVTY2FubmVyKCk7XG4gIH1cblxuICBwdWJsaWMgZG9DaGVja0F2YWlsYWJsZSgpIHtcbiAgICB0aGlzLmJhcmNvZGVTY2FubmVyLmF2YWlsYWJsZSgpLnRoZW4oYXZhaWwgPT4ge1xuICAgICAgYWxlcnQoe1xuICAgICAgICB0aXRsZTogXCJTY2FubmluZyBhdmFpbGFibGU/XCIsXG4gICAgICAgIG1lc3NhZ2U6IGF2YWlsID8gXCJZRVNcIiA6IFwiTk9cIixcbiAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcbiAgICAgIH0pO1xuICAgIH0sIChlcnIpID0+IHtcbiAgICAgIGFsZXJ0KGVycik7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZG9DaGVja0hhc0NhbWVyYVBlcm1pc3Npb24oKSB7XG4gICAgdGhpcy5iYXJjb2RlU2Nhbm5lci5oYXNDYW1lcmFQZXJtaXNzaW9uKCkudGhlbihwZXJtaXR0ZWQgPT4ge1xuICAgICAgYWxlcnQoe1xuICAgICAgICB0aXRsZTogXCJIYXMgQ2FtZXJhIHBlcm1pc3Npb24/XCIsXG4gICAgICAgIG1lc3NhZ2U6IHBlcm1pdHRlZCA/IFwiWUVTXCIgOiBcIk5PXCIsXG4gICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXG4gICAgICB9KTtcbiAgICB9LCAoZXJyKSA9PiB7XG4gICAgICBhbGVydChlcnIpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGRvUmVxdWVzdENhbWVyYVBlcm1pc3Npb24oKSB7XG4gICAgdGhpcy5iYXJjb2RlU2Nhbm5lci5yZXF1ZXN0Q2FtZXJhUGVybWlzc2lvbigpLnRoZW4oXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkNhbWVyYSBwZXJtaXNzaW9uIHJlcXVlc3RlZFwiKTtcbiAgICAgICAgfVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgZG9TY2FuV2l0aEJhY2tDYW1lcmEoKSB7XG4gICAgdGhpcy5zY2FuKGZhbHNlLCB0cnVlKTtcbiAgfVxuXG4gIHB1YmxpYyBkb1NjYW5XaXRoRnJvbnRDYW1lcmEoKSB7XG4gICAgdGhpcy5zY2FuKHRydWUsIGZhbHNlKTtcbiAgfVxuXG4gIHB1YmxpYyBkb1NjYW5XaXRoVG9yY2goKSB7XG4gICAgdGhpcy5zY2FuKGZhbHNlLCB0cnVlLCB0cnVlLCBcInBvcnRyYWl0XCIpO1xuICB9XG5cbiAgcHVibGljIGRvU2NhblBvcnRyYWl0KCkge1xuICAgIHRoaXMuc2NhbihmYWxzZSwgdHJ1ZSwgZmFsc2UsIFwicG9ydHJhaXRcIik7XG4gIH1cblxuICBwdWJsaWMgZG9TY2FuTGFuZHNjYXBlKCkge1xuICAgIHRoaXMuc2NhbihmYWxzZSwgdHJ1ZSwgZmFsc2UsIFwibGFuZHNjYXBlXCIpO1xuICB9XG5cbiAgcHVibGljIGRvQ29udGludW91c1NjYW4oKSB7XG4gICAgdGhpcy5iYXJjb2RlU2Nhbm5lci5zY2FuKHtcbiAgICAgIHJlcG9ydER1cGxpY2F0ZXM6IHRydWUsXG4gICAgICBjb250aW51b3VzU2NhbkNhbGxiYWNrOiBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGAke3Jlc3VsdC5mb3JtYXR9OiAke3Jlc3VsdC50ZXh0fSBAICR7bmV3IERhdGUoKS5nZXRUaW1lKCl9YCk7XG4gICAgICB9LFxuICAgICAgY2xvc2VDYWxsYmFjazogKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlNjYW5uZXIgY2xvc2VkIEAgXCIgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZG9Db250aW51b3VzU2Nhbk1heDMoKSB7XG4gICAgbGV0IGNvdW50ID0gMDtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgdGhpcy5iYXJjb2RlU2Nhbm5lci5zY2FuKHtcbiAgICAgIHJlcG9ydER1cGxpY2F0ZXM6IGZhbHNlLFxuICAgICAgY2xvc2VDYWxsYmFjazogKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlNjYW5uZXIgY2xvc2VkIEAgXCIgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKSk7XG4gICAgICB9LFxuICAgICAgY29udGludW91c1NjYW5DYWxsYmFjazogZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICBjb3VudCsrO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQuZm9ybWF0ICsgXCI6IFwiICsgcmVzdWx0LnRleHQgKyBcIiAoY291bnQ6IFwiICsgY291bnQgKyBcIilcIik7XG4gICAgICAgIGlmIChjb3VudCA9PT0gMykge1xuICAgICAgICAgIHNlbGYuYmFyY29kZVNjYW5uZXIuc3RvcCgpO1xuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgYWxlcnQoe1xuICAgICAgICAgICAgICB0aXRsZTogXCJTY2FubmVkIDMgY29kZXNcIixcbiAgICAgICAgICAgICAgbWVzc2FnZTogXCJDaGVjayB0aGUgbG9nIGZvciB0aGUgcmVzdWx0c1wiLFxuICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiU3dlZXQhXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHNjYW4oZnJvbnQ6IGJvb2xlYW4sIGZsaXA6IGJvb2xlYW4sIHRvcmNoPzogYm9vbGVhbiwgb3JpZW50YXRpb24/OiBzdHJpbmcpIHtcbiAgICB0aGlzLmJhcmNvZGVTY2FubmVyLnNjYW4oe1xuICAgICAgY2FuY2VsTGFiZWw6IFwiRVhJVC4gQWxzbywgdHJ5IHRoZSB2b2x1bWUgYnV0dG9ucyFcIiwgLy8gaU9TIG9ubHksIGRlZmF1bHQgJ0Nsb3NlJ1xuICAgICAgY2FuY2VsTGFiZWxCYWNrZ3JvdW5kQ29sb3I6IFwiIzMzMzMzM1wiLCAvLyBpT1Mgb25seSwgZGVmYXVsdCAnIzAwMDAwMCcgKGJsYWNrKVxuICAgICAgbWVzc2FnZTogXCJVc2UgdGhlIHZvbHVtZSBidXR0b25zIGZvciBleHRyYSBsaWdodFwiLCAvLyBBbmRyb2lkIG9ubHksIGRlZmF1bHQgaXMgJ1BsYWNlIGEgYmFyY29kZSBpbnNpZGUgdGhlIHZpZXdmaW5kZXIgcmVjdGFuZ2xlIHRvIHNjYW4gaXQuJ1xuICAgICAgcHJlZmVyRnJvbnRDYW1lcmE6IGZyb250LCAgICAgLy8gQW5kcm9pZCBvbmx5LCBkZWZhdWx0IGZhbHNlXG4gICAgICBzaG93RmxpcENhbWVyYUJ1dHRvbjogZmxpcCwgICAvLyBkZWZhdWx0IGZhbHNlXG4gICAgICBzaG93VG9yY2hCdXR0b246IHRvcmNoLCAgICAgICAvLyBpT1Mgb25seSwgZGVmYXVsdCBmYWxzZVxuICAgICAgdG9yY2hPbjogZmFsc2UsICAgICAgICAgICAgICAgLy8gbGF1bmNoIHdpdGggdGhlIGZsYXNobGlnaHQgb24gKGRlZmF1bHQgZmFsc2UpXG4gICAgICByZXN1bHREaXNwbGF5RHVyYXRpb246IDUwMCwgICAvLyBBbmRyb2lkIG9ubHksIGRlZmF1bHQgMTUwMCAobXMpLCBzZXQgdG8gMCB0byBkaXNhYmxlIGVjaG9pbmcgdGhlIHNjYW5uZWQgdGV4dFxuICAgICAgb3JpZW50YXRpb246IG9yaWVudGF0aW9uLCAgICAgLy8gQW5kcm9pZCBvbmx5LCBkZWZhdWx0IHVuZGVmaW5lZCAoc2Vuc29yLWRyaXZlbiBvcmllbnRhdGlvbiksIG90aGVyIG9wdGlvbnM6IHBvcnRyYWl0fGxhbmRzY2FwZVxuICAgICAgYmVlcE9uU2NhbjogdHJ1ZSwgICAgICAgICAgICAgLy8gUGxheSBvciBTdXBwcmVzcyBiZWVwIG9uIHNjYW4gKGRlZmF1bHQgdHJ1ZSlcbiAgICAgIG9wZW5TZXR0aW5nc0lmUGVybWlzc2lvbldhc1ByZXZpb3VzbHlEZW5pZWQ6IHRydWUsIC8vIE9uIGlPUyB5b3UgY2FuIHNlbmQgdGhlIHVzZXIgdG8gdGhlIHNldHRpbmdzIGFwcCBpZiBhY2Nlc3Mgd2FzIHByZXZpb3VzbHkgZGVuaWVkXG4gICAgICBjbG9zZUNhbGxiYWNrOiAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2Nhbm5lciBjbG9zZWQgQCBcIiArIG5ldyBEYXRlKCkuZ2V0VGltZSgpKTtcbiAgICAgIH1cbiAgICB9KS50aGVuKFxuICAgICAgICBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCItLS0gc2Nhbm5lZDogXCIgKyByZXN1bHQudGV4dCk7XG4gICAgICAgICAgLy8gTm90ZSB0aGF0IHRoaXMgUHJvbWlzZSBpcyBuZXZlciBpbnZva2VkIHdoZW4gYSAnY29udGludW91c1NjYW5DYWxsYmFjaycgZnVuY3Rpb24gaXMgcHJvdmlkZWRcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIGlmIHRoaXMgYWxlcnQgZG9lc24ndCBzaG93IHVwIHBsZWFzZSB1cGdyYWRlIHRvIHtOfSAyLjQuMCtcbiAgICAgICAgICAgIGFsZXJ0KHtcbiAgICAgICAgICAgICAgdGl0bGU6IFwiU2NhbiByZXN1bHRcIixcbiAgICAgICAgICAgICAgbWVzc2FnZTogXCJGb3JtYXQ6IFwiICsgcmVzdWx0LmZvcm1hdCArIFwiLFxcblZhbHVlOiBcIiArIHJlc3VsdC50ZXh0LFxuICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgfSxcbiAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm8gc2Nhbi4gXCIgKyBlcnJvck1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgKTtcbiAgfVxufSJdfQ==