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
    HelloWorldModel.prototype.doRequestCameraPermission = function () {
        this.barcodeScanner.requestCameraPermission().then(function () {
            console.log("Camera permission requested");
        });
    };
    HelloWorldModel.prototype.doScanWithBackCamera = function () {
        this.scan(false, false);
    };
    HelloWorldModel.prototype.scan = function (front, flip, torch, orientation) {
        this.barcodeScanner.scan({
            cancelLabelBackgroundColor: "#333333",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0RBQThEO0FBQzlELHVEQUFvRDtBQUNwRCwyRUFBNkQ7QUFFN0Q7SUFBcUMsbUNBQVU7SUFJN0M7UUFBQSxZQUNFLGlCQUFPLFNBRVI7UUFEQyxLQUFJLENBQUMsY0FBYyxHQUFHLElBQUksNENBQWMsRUFBRSxDQUFDOztJQUM3QyxDQUFDO0lBRU0sbURBQXlCLEdBQWhDO1FBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyx1QkFBdUIsRUFBRSxDQUFDLElBQUksQ0FDOUM7WUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUM7UUFDN0MsQ0FBQyxDQUNKLENBQUM7SUFDSixDQUFDO0lBRU0sOENBQW9CLEdBQTNCO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVPLDhCQUFJLEdBQVosVUFBYSxLQUFjLEVBQUUsSUFBYSxFQUFFLEtBQWUsRUFBRSxXQUFvQjtRQUMvRSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQztZQUV2QiwwQkFBMEIsRUFBRSxTQUFTO1lBRXJDLGlCQUFpQixFQUFFLEtBQUs7WUFDeEIsb0JBQW9CLEVBQUUsSUFBSTtZQUMxQixlQUFlLEVBQUUsS0FBSztZQUN0QixPQUFPLEVBQUUsS0FBSztZQUNkLHFCQUFxQixFQUFFLEdBQUc7WUFDMUIsV0FBVyxFQUFFLFdBQVc7WUFDeEIsVUFBVSxFQUFFLElBQUk7WUFDaEIsMkNBQTJDLEVBQUUsSUFBSTtZQUNqRCxhQUFhLEVBQUU7Z0JBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7WUFDMUQsQ0FBQztTQUNGLENBQUMsQ0FBQyxJQUFJLENBQ0gsVUFBVSxNQUFNO1lBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRTNDLFVBQVUsQ0FBQztnQkFFVCxlQUFLLENBQUM7b0JBQ0osS0FBSyxFQUFFLGFBQWE7b0JBQ3BCLE9BQU8sRUFBRSxVQUFVLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxZQUFZLEdBQUcsTUFBTSxDQUFDLElBQUk7b0JBQ2hFLFlBQVksRUFBRSxJQUFJO2lCQUNuQixDQUFDLENBQUM7WUFDTCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDVixDQUFDLEVBQ0QsVUFBVSxZQUFZO1lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLFlBQVksQ0FBQyxDQUFDO1FBQzFDLENBQUMsQ0FDSixDQUFDO0lBQ0osQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQXZERCxDQUFxQyx1QkFBVSxHQXVEOUM7QUF2RFksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBhbGVydCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcbmltcG9ydCB7IEJhcmNvZGVTY2FubmVyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1iYXJjb2Rlc2Nhbm5lclwiO1xuXG5leHBvcnQgY2xhc3MgSGVsbG9Xb3JsZE1vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG4gIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmc7XG4gIHByaXZhdGUgYmFyY29kZVNjYW5uZXI6IEJhcmNvZGVTY2FubmVyO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5iYXJjb2RlU2Nhbm5lciA9IG5ldyBCYXJjb2RlU2Nhbm5lcigpO1xuICB9XG5cbiAgcHVibGljIGRvUmVxdWVzdENhbWVyYVBlcm1pc3Npb24oKSB7XG4gICAgdGhpcy5iYXJjb2RlU2Nhbm5lci5yZXF1ZXN0Q2FtZXJhUGVybWlzc2lvbigpLnRoZW4oXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkNhbWVyYSBwZXJtaXNzaW9uIHJlcXVlc3RlZFwiKTtcbiAgICAgICAgfVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgZG9TY2FuV2l0aEJhY2tDYW1lcmEoKSB7XG4gICAgdGhpcy5zY2FuKGZhbHNlLCBmYWxzZSk7XG4gIH1cblxuICBwcml2YXRlIHNjYW4oZnJvbnQ6IGJvb2xlYW4sIGZsaXA6IGJvb2xlYW4sIHRvcmNoPzogYm9vbGVhbiwgb3JpZW50YXRpb24/OiBzdHJpbmcpIHtcbiAgICB0aGlzLmJhcmNvZGVTY2FubmVyLnNjYW4oe1xuICAgICAgLy9jYW5jZWxMYWJlbDogXCJFWElULiBBbHNvLCB0cnkgdGhlIHZvbHVtZSBidXR0b25zIVwiLCAvLyBpT1Mgb25seSwgZGVmYXVsdCAnQ2xvc2UnXG4gICAgICBjYW5jZWxMYWJlbEJhY2tncm91bmRDb2xvcjogXCIjMzMzMzMzXCIsIC8vIGlPUyBvbmx5LCBkZWZhdWx0ICcjMDAwMDAwJyAoYmxhY2spXG4gICAgICAvL21lc3NhZ2U6IFwiVXNlIHRoZSB2b2x1bWUgYnV0dG9ucyBmb3IgZXh0cmEgbGlnaHRcIiwgLy8gQW5kcm9pZCBvbmx5LCBkZWZhdWx0IGlzICdQbGFjZSBhIGJhcmNvZGUgaW5zaWRlIHRoZSB2aWV3ZmluZGVyIHJlY3RhbmdsZSB0byBzY2FuIGl0LidcbiAgICAgIHByZWZlckZyb250Q2FtZXJhOiBmcm9udCwgICAgIC8vIEFuZHJvaWQgb25seSwgZGVmYXVsdCBmYWxzZVxuICAgICAgc2hvd0ZsaXBDYW1lcmFCdXR0b246IGZsaXAsICAgLy8gZGVmYXVsdCBmYWxzZVxuICAgICAgc2hvd1RvcmNoQnV0dG9uOiB0b3JjaCwgICAgICAgLy8gaU9TIG9ubHksIGRlZmF1bHQgZmFsc2VcbiAgICAgIHRvcmNoT246IGZhbHNlLCAgICAgICAgICAgICAgIC8vIGxhdW5jaCB3aXRoIHRoZSBmbGFzaGxpZ2h0IG9uIChkZWZhdWx0IGZhbHNlKVxuICAgICAgcmVzdWx0RGlzcGxheUR1cmF0aW9uOiA1MDAsICAgLy8gQW5kcm9pZCBvbmx5LCBkZWZhdWx0IDE1MDAgKG1zKSwgc2V0IHRvIDAgdG8gZGlzYWJsZSBlY2hvaW5nIHRoZSBzY2FubmVkIHRleHRcbiAgICAgIG9yaWVudGF0aW9uOiBvcmllbnRhdGlvbiwgICAgIC8vIEFuZHJvaWQgb25seSwgZGVmYXVsdCB1bmRlZmluZWQgKHNlbnNvci1kcml2ZW4gb3JpZW50YXRpb24pLCBvdGhlciBvcHRpb25zOiBwb3J0cmFpdHxsYW5kc2NhcGVcbiAgICAgIGJlZXBPblNjYW46IHRydWUsICAgICAgICAgICAgIC8vIFBsYXkgb3IgU3VwcHJlc3MgYmVlcCBvbiBzY2FuIChkZWZhdWx0IHRydWUpXG4gICAgICBvcGVuU2V0dGluZ3NJZlBlcm1pc3Npb25XYXNQcmV2aW91c2x5RGVuaWVkOiB0cnVlLCAvLyBPbiBpT1MgeW91IGNhbiBzZW5kIHRoZSB1c2VyIHRvIHRoZSBzZXR0aW5ncyBhcHAgaWYgYWNjZXNzIHdhcyBwcmV2aW91c2x5IGRlbmllZFxuICAgICAgY2xvc2VDYWxsYmFjazogKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlNjYW5uZXIgY2xvc2VkIEAgXCIgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKSk7XG4gICAgICB9XG4gICAgfSkudGhlbihcbiAgICAgICAgZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiLS0tIHNjYW5uZWQ6IFwiICsgcmVzdWx0LnRleHQpO1xuICAgICAgICAgIC8vIE5vdGUgdGhhdCB0aGlzIFByb21pc2UgaXMgbmV2ZXIgaW52b2tlZCB3aGVuIGEgJ2NvbnRpbnVvdXNTY2FuQ2FsbGJhY2snIGZ1bmN0aW9uIGlzIHByb3ZpZGVkXG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBpZiB0aGlzIGFsZXJ0IGRvZXNuJ3Qgc2hvdyB1cCBwbGVhc2UgdXBncmFkZSB0byB7Tn0gMi40LjArXG4gICAgICAgICAgICBhbGVydCh7XG4gICAgICAgICAgICAgIHRpdGxlOiBcIlNjYW4gcmVzdWx0XCIsXG4gICAgICAgICAgICAgIG1lc3NhZ2U6IFwiRm9ybWF0OiBcIiArIHJlc3VsdC5mb3JtYXQgKyBcIixcXG5WYWx1ZTogXCIgKyByZXN1bHQudGV4dCxcbiAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgIH0sXG4gICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vIHNjYW4uIFwiICsgZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICk7XG4gIH1cbn1cbiJdfQ==