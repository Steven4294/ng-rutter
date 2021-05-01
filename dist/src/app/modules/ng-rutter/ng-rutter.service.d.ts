export declare class NgRutterServiceOptions {
    PUBLIC_API_KEY: string;
}
export declare class NgRutterService {
    options: NgRutterServiceOptions;
    url: string;
    loadRutter(onSuccess: any, onLoad: any, onExit: any): void;
    setup(): Promise<{}>;
    constructor(options: NgRutterServiceOptions);
}
