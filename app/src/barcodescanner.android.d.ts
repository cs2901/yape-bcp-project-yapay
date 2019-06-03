import { ScanOptions, ScanResult } from "./barcodescanner-common";
export declare class BarcodeScanner {
    private broadcastManager;
    private onPermissionGranted;
    private onPermissionRejected;
    private uniquelyScannedCodes;
    constructor();
    private wasCameraPermissionGranted();
    private requestCameraPermissionInternal(onPermissionGranted, reject);
    available(): Promise<boolean>;
    hasCameraPermission(): Promise<boolean>;
    requestCameraPermission(): Promise<boolean>;
    stop(): Promise<any>;
    scan(arg: ScanOptions): Promise<ScanResult>;
}
