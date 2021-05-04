import { Observer, Observable, Subscription } from "rxjs";
export interface NgRutterEvent {
    name: string;
    data?: any;
}
export declare enum NgRutterEventType {
    SUCCESS = "SUCCESS",
    LOAD = "LOAD",
    EXIT = "EXIT",
}
export declare class NgRutterServiceOptions {
    PUBLIC_API_KEY: string;
}
export declare class NgRutterService {
    options: NgRutterServiceOptions;
    observable: Observable<NgRutterEvent>;
    observer: Observer<any>;
    url: string;
    open(): void;
    loadRutter(onSuccess: any, onLoad: any, onExit: any): void;
    setup(): Promise<{}>;
    constructor(options: NgRutterServiceOptions);
    destroy(subscriber: Subscription): void;
}
