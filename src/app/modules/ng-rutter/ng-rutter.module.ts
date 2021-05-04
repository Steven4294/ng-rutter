import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgRutterComponent } from './ng-rutter.component';
import { InjectionToken } from "@angular/core";
import { NgRutterServiceOptions, NgRutterService } from './ng-rutter.service';


@NgModule({
  	imports: [
    	CommonModule
  	],
  	providers: [
		NgRutterService
	],
	declarations: [
		NgRutterComponent
	],
	exports: [
		NgRutterComponent,
	]
})
export class NgRutterModule {

  static forRoot( options?: ModuleOptions ) : ModuleWithProviders {
 
		return({
			ngModule: NgRutterModule,
			providers: [
				{
					provide: FOR_ROOT_OPTIONS_TOKEN,
					useValue: options
				},
				{
					provide: NgRutterServiceOptions,
					useFactory: provideMyServiceOptions,
					deps: [ FOR_ROOT_OPTIONS_TOKEN ]
				},
				NgRutterService
			]
		});
	}
 }


// I define the shape of the optional configuration data passed to the forRoot() method.
export interface ModuleOptions {
  PUBLIC_API_KEY?: string;
}

export var FOR_ROOT_OPTIONS_TOKEN = new InjectionToken<ModuleOptions>( "forRoot() MyService configuration." );

export function provideMyServiceOptions( options?: ModuleOptions ) : NgRutterServiceOptions {
 
	var serviceOptions = new NgRutterServiceOptions();
	if ( options ) {
 
		if ( typeof( options.PUBLIC_API_KEY ) === "string" ) {
			serviceOptions.PUBLIC_API_KEY = options.PUBLIC_API_KEY;
		}
	}
 
	return( serviceOptions );
}