// Import the core angular services.
import { Injectable } from "@angular/core";
import { get } from 'scriptjs';

declare var Rutter: any;

@Injectable({
	providedIn: "root"
})
export class NgRutterServiceOptions {
	public PUBLIC_API_KEY: string = '';
}

@Injectable({
	providedIn: "root"
})
export class NgRutterService {
 
	public options: NgRutterServiceOptions;
	url = 'https://unpkg.com/@rutter/rutter-link@latest';

	loadRutter(onSuccess, onLoad, onExit) {

		var rutterInstance = Rutter.create({
			publicKey: this.options.PUBLIC_API_KEY,
			onSuccess: function (publicToken) {
				onSuccess(publicToken)
			},
			onLoad: onLoad(),
			onExit: onExit(),
		})
			
		rutterInstance.open();
	}

	setup() {
		return new Promise((resolve, reject) => {
			get(this.url, () => {
				resolve()
			});
		})
	}
	
	constructor( options: NgRutterServiceOptions ) {
		this.options = options;
	}
}