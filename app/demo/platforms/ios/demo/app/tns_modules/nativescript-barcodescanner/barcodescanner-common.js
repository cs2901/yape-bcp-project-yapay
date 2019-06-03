"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var content_view_1 = require("tns-core-modules/ui/content-view");
var properties_1 = require("tns-core-modules/ui/core/properties");
var view_base_1 = require("tns-core-modules/ui/core/view-base");
exports.formatsProperty = new properties_1.Property({
    name: "formats",
    defaultValue: null,
});
exports.preferFrontCameraProperty = new properties_1.Property({
    name: "preferFrontCamera",
    defaultValue: false,
    valueConverter: view_base_1.booleanConverter
});
exports.beepOnScanProperty = new properties_1.Property({
    name: "beepOnScan",
    defaultValue: true,
    valueConverter: view_base_1.booleanConverter
});
exports.reportDuplicatesProperty = new properties_1.Property({
    name: "reportDuplicates",
    defaultValue: false,
    valueConverter: view_base_1.booleanConverter
});
var BarcodeScannerView = (function (_super) {
    __extends(BarcodeScannerView, _super);
    function BarcodeScannerView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BarcodeScannerView.prototype[exports.formatsProperty.setNative] = function (value) {
        this.formats = value;
    };
    BarcodeScannerView.prototype[exports.preferFrontCameraProperty.setNative] = function (value) {
        this.preferFrontCamera = value;
    };
    BarcodeScannerView.prototype[exports.beepOnScanProperty.setNative] = function (value) {
        this.beepOnScan = value;
    };
    BarcodeScannerView.prototype[exports.reportDuplicatesProperty.setNative] = function (value) {
        this.reportDuplicates = value;
    };
    BarcodeScannerView.scanResultEvent = "scanResult";
    return BarcodeScannerView;
}(content_view_1.ContentView));
exports.BarcodeScannerView = BarcodeScannerView;
exports.formatsProperty.register(BarcodeScannerView);
exports.preferFrontCameraProperty.register(BarcodeScannerView);
exports.beepOnScanProperty.register(BarcodeScannerView);
exports.reportDuplicatesProperty.register(BarcodeScannerView);
//# sourceMappingURL=barcodescanner-common.js.map