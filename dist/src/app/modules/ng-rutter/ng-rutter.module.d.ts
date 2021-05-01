import { ModuleWithProviders } from '@angular/core';
import { InjectionToken } from "@angular/core";
import { NgRutterServiceOptions } from './ng-rutter.service';
export declare class NgRutterModule {
    static forRoot(options?: ModuleOptions): ModuleWithProviders;
}
export interface ModuleOptions {
    PUBLIC_API_KEY?: string;
}
export declare var FOR_ROOT_OPTIONS_TOKEN: InjectionToken<ModuleOptions>;
export declare function provideMyServiceOptions(options?: ModuleOptions): NgRutterServiceOptions;
