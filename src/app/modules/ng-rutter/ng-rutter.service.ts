// Import the core angular services.
import { Injectable } from "@angular/core";
import { get } from 'scriptjs';
import { Observer, Observable, Subscription, of } from "rxjs";
import { filter, share } from 'rxjs/operators'

declare var Rutter: any;

export interface NgRutterEvent {
	name: string
	data?: any
}

export enum NgRutterEventType {
	SUCCESS = 'SUCCESS',
	LOAD = 'LOAD',
	EXIT = 'EXIT',
}

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
	public observable: Observable<NgRutterEvent>;
	public observer: Observer<any>
	url = 'https://unpkg.com/@rutter/rutter-link@latest';

	open() {
		this.loadRutter(() => {}, () => {}, () => {})
	}

	loadRutter(onSuccess, onLoad, onExit) {

		var rutterInstance = Rutter.create({
			publicKey: this.options.PUBLIC_API_KEY,
			onSuccess: (publicToken) => {
				console.log(`inner success ${this.observer}`)

				this.observer.next({

					name: NgRutterEventType.SUCCESS,
					data: {
						token: publicToken
					}
				})
				onSuccess(publicToken)
			},
			onLoad: () => {
				this.observer.next({
					name: NgRutterEventType.LOAD
				})
				onLoad()
			},
			onExit: () => {
				this.observer.next({
					name: NgRutterEventType.EXIT
				})
				onExit()
			},
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
		this.observable = Observable.create((observer: Observer<any>) => {
			this.observer = observer
		})

		this.setup()
	}

	destroy(subscriber: Subscription) {
		subscriber.unsubscribe();
	}
}