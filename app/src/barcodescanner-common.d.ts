import { ContentView } from "tns-core-modules/ui/content-view";
import { Property } from "tns-core-modules/ui/core/properties";
export declare type BarcodeFormat = "QR_CODE" | "PDF_417" | "AZTEC" | "UPC_E" | "CODE_39" | "CODE_39_MOD_43" | "CODE_93" | "CODE_128" | "DATA_MATRIX" | "EAN_8" | "ITF" | "EAN_13" | "UPC_A" | "CODABAR" | "MAXICODE" | "RSS_14" | "INTERLEAVED_2_OF_5";
export interface ScanResult {
    text: string;
    format: BarcodeFormat;
}
export interface CommonScanOptions {
    formats?: string;
    continuousScanCallback?: (scanResult: ScanResult) => void;
    closeCallback?: () => void;
    reportDuplicates?: boolean;
    preferFrontCamera?: boolean;
    showFlipCameraButton?: boolean;
    showTorchButton?: boolean;
    torchOn?: boolean;
    beepOnScan?: boolean;
}
export interface IOS extends CommonScanOptions {
    cancelLabel?: string;
    cancelLabelBackgroundColor?: string;
    openSettingsIfPermissionWasPreviouslyDenied?: boolean;
}
export interface Android extends CommonScanOptions {
    message?: string;
    orientation?: string;
    resultDisplayDuration?: number;
}
export interface ScanOptions extends IOS, Android {
    IOS?: IOS;
    Android?: Android;
}
export declare class BarcodeScanner {
    private _observer;
    private _observerActive;
    private _currentVolume;
    private _scanner;
    constructor();
    private _hasCameraPermission;
    private _hasDeniedCameraPermission;
    private _addVolumeObserver;
    private _removeVolumeObserver;
    private _enableTorch;
    private _disableTorch;
    available(): Promise<boolean>;
    hasCameraPermission(): Promise<boolean>;
    requestCameraPermission(): Promise<boolean>;
    stop(): Promise<any>;
    scan(arg: ScanOptions): Promise<ScanResult>;
}
export declare const formatsProperty: any;
export declare const preferFrontCameraProperty: Property<BarcodeScannerView, boolean>;
export declare const beepOnScanProperty: Property<BarcodeScannerView, boolean>;
export declare const reportDuplicatesProperty: Property<BarcodeScannerView, boolean>;
export declare abstract class BarcodeScannerView extends ContentView {
    static scanResultEvent: string;
    protected formats: string;
    protected preferFrontCamera: boolean;
    protected beepOnScan: boolean;
    protected reportDuplicates: boolean;
}
