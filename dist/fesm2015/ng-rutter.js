import { Injectable, Component, Output, EventEmitter, Input, NgModule, InjectionToken, defineInjectable, inject } from '@angular/core';
import { get } from 'scriptjs';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {string} */
const NgRutterEventType = {
    SUCCESS: 'SUCCESS',
    LOAD: 'LOAD',
    EXIT: 'EXIT',
};
class NgRutterServiceOptions {
    constructor() {
        this.PUBLIC_API_KEY = '';
    }
}
NgRutterServiceOptions.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] },
];
/** @nocollapse */ NgRutterServiceOptions.ngInjectableDef = defineInjectable({ factory: function NgRutterServiceOptions_Factory() { return new NgRutterServiceOptions(); }, token: NgRutterServiceOptions, providedIn: "root" });
class NgRutterService {
    /**
     * @param {?} options
     */
    constructor(options) {
        this.url = 'https://unpkg.com/@rutter/rutter-link@latest';
        this.options = options;
        this.observable = Observable.create((observer) => {
            this.observer = observer;
        });
        this.setup();
    }
    /**
     * @return {?}
     */
    open() {
        this.loadRutter(() => { }, () => { }, () => { });
    }
    /**
     * @param {?} onSuccess
     * @param {?} onLoad
     * @param {?} onExit
     * @return {?}
     */
    loadRutter(onSuccess, onLoad, onExit) {
        /** @type {?} */
        var rutterInstance = Rutter.create({
            publicKey: this.options.PUBLIC_API_KEY,
            onSuccess: (publicToken) => {
                console.log(`inner success ${this.observer}`);
                this.observer.next({
                    name: NgRutterEventType.SUCCESS,
                    data: {
                        token: publicToken
                    }
                });
                onSuccess(publicToken);
            },
            onLoad: () => {
                this.observer.next({
                    name: NgRutterEventType.LOAD
                });
                onLoad();
            },
            onExit: () => {
                this.observer.next({
                    name: NgRutterEventType.EXIT
                });
                onExit();
            },
        });
        rutterInstance.open();
    }
    /**
     * @return {?}
     */
    setup() {
        return new Promise((resolve, reject) => {
            get(this.url, () => {
                resolve();
            });
        });
    }
    /**
     * @param {?} subscriber
     * @return {?}
     */
    destroy(subscriber) {
        subscriber.unsubscribe();
    }
}
NgRutterService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] },
];
/** @nocollapse */
NgRutterService.ctorParameters = () => [
    { type: NgRutterServiceOptions }
];
/** @nocollapse */ NgRutterService.ngInjectableDef = defineInjectable({ factory: function NgRutterService_Factory() { return new NgRutterService(inject(NgRutterServiceOptions)); }, token: NgRutterService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class NgRutterComponent {
    /**
     * @param {?} rutterService
     */
    constructor(rutterService) {
        this.rutterService = rutterService;
        this.text = 'Log in';
        this.backgroundColor = '#000';
        this.color = '#FFF';
        this.onSuccess = new EventEmitter();
        this.onLoad = new EventEmitter();
        this.onExit = new EventEmitter();
    }
    /**
     * @return {?}
     */
    load() {
        this.rutterService.loadRutter((publicToken) => {
            this.onSuccess.emit(publicToken);
        }, () => {
            this.onLoad.emit();
        }, () => {
            this.onExit.emit();
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.rutterService.setup();
    }
}
NgRutterComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-rutter',
                template: `<div class="btn" (click)="load()" 
[style.background-color]="backgroundColor"
[style.color]="color"

> {{ text }} </div>`,
                styles: [`.btn{display:inline-block;font-weight:400;text-align:center;white-space:nowrap;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid transparent;padding:.375rem .75rem;font-size:1rem;line-height:1.5;border-radius:.25rem;position:relative;color:#fff;background-color:#007bff;font-family:Lato,sans-serif!important;cursor:pointer}`]
            },] },
];
/** @nocollapse */
NgRutterComponent.ctorParameters = () => [
    { type: NgRutterService }
];
NgRutterComponent.propDecorators = {
    text: [{ type: Input }],
    backgroundColor: [{ type: Input }],
    color: [{ type: Input }],
    onSuccess: [{ type: Output }],
    onLoad: [{ type: Output }],
    onExit: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class NgRutterModule {
    /**
     * @param {?=} options
     * @return {?}
     */
    static forRoot(options) {
        return ({
            ngModule: NgRutterModule,
            providers: [
                {
                    provide: FOR_ROOT_OPTIONS_TOKEN,
                    useValue: options
                },
                {
                    provide: NgRutterServiceOptions,
                    useFactory: provideMyServiceOptions,
                    deps: [FOR_ROOT_OPTIONS_TOKEN]
                },
                NgRutterService
            ]
        });
    }
}
NgRutterModule.decorators = [
    { type: NgModule, args: [{
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
            },] },
];
/** @type {?} */
var FOR_ROOT_OPTIONS_TOKEN = new InjectionToken("forRoot() MyService configuration.");
/**
 * @param {?=} options
 * @return {?}
 */
function provideMyServiceOptions(options) {
    /** @type {?} */
    var serviceOptions = new NgRutterServiceOptions();
    if (options) {
        if (typeof (options.PUBLIC_API_KEY) === "string") {
            serviceOptions.PUBLIC_API_KEY = options.PUBLIC_API_KEY;
        }
    }
    return (serviceOptions);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { NgRutterModule, FOR_ROOT_OPTIONS_TOKEN, provideMyServiceOptions, NgRutterEventType, NgRutterServiceOptions, NgRutterService, NgRutterComponent as ??a };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctcnV0dGVyLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZy1ydXR0ZXIvc3JjL2FwcC9tb2R1bGVzL25nLXJ1dHRlci9uZy1ydXR0ZXIuc2VydmljZS50cyIsIm5nOi8vbmctcnV0dGVyL3NyYy9hcHAvbW9kdWxlcy9uZy1ydXR0ZXIvbmctcnV0dGVyLmNvbXBvbmVudC50cyIsIm5nOi8vbmctcnV0dGVyL3NyYy9hcHAvbW9kdWxlcy9uZy1ydXR0ZXIvbmctcnV0dGVyLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnQgdGhlIGNvcmUgYW5ndWxhciBzZXJ2aWNlcy5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgZ2V0IH0gZnJvbSAnc2NyaXB0anMnO1xuaW1wb3J0IHsgT2JzZXJ2ZXIsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiwgb2YgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgZmlsdGVyLCBzaGFyZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJ1xuXG5kZWNsYXJlIHZhciBSdXR0ZXI6IGFueTtcblxuZXhwb3J0IGludGVyZmFjZSBOZ1J1dHRlckV2ZW50IHtcblx0bmFtZTogc3RyaW5nXG5cdGRhdGE/OiBhbnlcbn1cblxuZXhwb3J0IGVudW0gTmdSdXR0ZXJFdmVudFR5cGUge1xuXHRTVUNDRVNTID0gJ1NVQ0NFU1MnLFxuXHRMT0FEID0gJ0xPQUQnLFxuXHRFWElUID0gJ0VYSVQnLFxufVxuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46IFwicm9vdFwiXG59KVxuZXhwb3J0IGNsYXNzIE5nUnV0dGVyU2VydmljZU9wdGlvbnMge1xuXHRwdWJsaWMgUFVCTElDX0FQSV9LRVk6IHN0cmluZyA9ICcnO1xufVxuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46IFwicm9vdFwiXG59KVxuZXhwb3J0IGNsYXNzIE5nUnV0dGVyU2VydmljZSB7XG4gXG5cdHB1YmxpYyBvcHRpb25zOiBOZ1J1dHRlclNlcnZpY2VPcHRpb25zO1xuXHRwdWJsaWMgb2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxOZ1J1dHRlckV2ZW50Pjtcblx0cHVibGljIG9ic2VydmVyOiBPYnNlcnZlcjxhbnk+XG5cdHVybCA9ICdodHRwczovL3VucGtnLmNvbS9AcnV0dGVyL3J1dHRlci1saW5rQGxhdGVzdCc7XG5cblx0b3BlbigpIHtcblx0XHR0aGlzLmxvYWRSdXR0ZXIoKCkgPT4ge30sICgpID0+IHt9LCAoKSA9PiB7fSlcblx0fVxuXG5cdGxvYWRSdXR0ZXIob25TdWNjZXNzLCBvbkxvYWQsIG9uRXhpdCkge1xuXG5cdFx0dmFyIHJ1dHRlckluc3RhbmNlID0gUnV0dGVyLmNyZWF0ZSh7XG5cdFx0XHRwdWJsaWNLZXk6IHRoaXMub3B0aW9ucy5QVUJMSUNfQVBJX0tFWSxcblx0XHRcdG9uU3VjY2VzczogKHB1YmxpY1Rva2VuKSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGBpbm5lciBzdWNjZXNzICR7dGhpcy5vYnNlcnZlcn1gKVxuXG5cdFx0XHRcdHRoaXMub2JzZXJ2ZXIubmV4dCh7XG5cblx0XHRcdFx0XHRuYW1lOiBOZ1J1dHRlckV2ZW50VHlwZS5TVUNDRVNTLFxuXHRcdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHRcdHRva2VuOiBwdWJsaWNUb2tlblxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdFx0b25TdWNjZXNzKHB1YmxpY1Rva2VuKVxuXHRcdFx0fSxcblx0XHRcdG9uTG9hZDogKCkgPT4ge1xuXHRcdFx0XHR0aGlzLm9ic2VydmVyLm5leHQoe1xuXHRcdFx0XHRcdG5hbWU6IE5nUnV0dGVyRXZlbnRUeXBlLkxPQURcblx0XHRcdFx0fSlcblx0XHRcdFx0b25Mb2FkKClcblx0XHRcdH0sXG5cdFx0XHRvbkV4aXQ6ICgpID0+IHtcblx0XHRcdFx0dGhpcy5vYnNlcnZlci5uZXh0KHtcblx0XHRcdFx0XHRuYW1lOiBOZ1J1dHRlckV2ZW50VHlwZS5FWElUXG5cdFx0XHRcdH0pXG5cdFx0XHRcdG9uRXhpdCgpXG5cdFx0XHR9LFxuXHRcdH0pXG5cdFx0XHRcblx0XHRydXR0ZXJJbnN0YW5jZS5vcGVuKCk7XG5cdH1cblxuXHRzZXR1cCgpIHtcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0Z2V0KHRoaXMudXJsLCAoKSA9PiB7XG5cdFx0XHRcdHJlc29sdmUoKVxuXHRcdFx0fSk7XG5cdFx0fSlcblx0fVxuXG5cdGNvbnN0cnVjdG9yKCBvcHRpb25zOiBOZ1J1dHRlclNlcnZpY2VPcHRpb25zICkge1xuXHRcdHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cdFx0dGhpcy5vYnNlcnZhYmxlID0gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyOiBPYnNlcnZlcjxhbnk+KSA9PiB7XG5cdFx0XHR0aGlzLm9ic2VydmVyID0gb2JzZXJ2ZXJcblx0XHR9KVxuXG5cdFx0dGhpcy5zZXR1cCgpXG5cdH1cblxuXHRkZXN0cm95KHN1YnNjcmliZXI6IFN1YnNjcmlwdGlvbikge1xuXHRcdHN1YnNjcmliZXIudW5zdWJzY3JpYmUoKTtcblx0fVxufSIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nUnV0dGVyU2VydmljZSB9IGZyb20gJy4vbmctcnV0dGVyLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZy1ydXR0ZXInLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJidG5cIiAoY2xpY2spPVwibG9hZCgpXCIgXG5bc3R5bGUuYmFja2dyb3VuZC1jb2xvcl09XCJiYWNrZ3JvdW5kQ29sb3JcIlxuW3N0eWxlLmNvbG9yXT1cImNvbG9yXCJcblxuPiB7eyB0ZXh0IH19IDwvZGl2PmAsXG4gIHN0eWxlczogW2AuYnRue2Rpc3BsYXk6aW5saW5lLWJsb2NrO2ZvbnQtd2VpZ2h0OjQwMDt0ZXh0LWFsaWduOmNlbnRlcjt3aGl0ZS1zcGFjZTpub3dyYXA7dmVydGljYWwtYWxpZ246bWlkZGxlOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTtib3JkZXI6MXB4IHNvbGlkIHRyYW5zcGFyZW50O3BhZGRpbmc6LjM3NXJlbSAuNzVyZW07Zm9udC1zaXplOjFyZW07bGluZS1oZWlnaHQ6MS41O2JvcmRlci1yYWRpdXM6LjI1cmVtO3Bvc2l0aW9uOnJlbGF0aXZlO2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjojMDA3YmZmO2ZvbnQtZmFtaWx5OkxhdG8sc2Fucy1zZXJpZiFpbXBvcnRhbnQ7Y3Vyc29yOnBvaW50ZXJ9YF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBOZ1J1dHRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHRleHQgPSAnTG9nIGluJztcbiAgQElucHV0KCkgYmFja2dyb3VuZENvbG9yID0gJyMwMDAnO1xuICBASW5wdXQoKSBjb2xvciA9ICcjRkZGJztcblxuICBAT3V0cHV0KCkgb25TdWNjZXNzID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIEBPdXRwdXQoKSBvbkxvYWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBvbkV4aXQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgbG9hZCgpIHtcbiAgICB0aGlzLnJ1dHRlclNlcnZpY2UubG9hZFJ1dHRlcigocHVibGljVG9rZW4pID0+IHtcbiAgICAgIHRoaXMub25TdWNjZXNzLmVtaXQocHVibGljVG9rZW4pXG4gICAgfSwgKCkgPT4ge1xuICAgICAgdGhpcy5vbkxvYWQuZW1pdCgpXG4gICAgfSwgKCkgPT4ge1xuICAgICAgdGhpcy5vbkV4aXQuZW1pdCgpXG4gICAgfSk7XG4gIH1cbiAgXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucnV0dGVyU2VydmljZS5zZXR1cCgpXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJ1dHRlclNlcnZpY2U6IE5nUnV0dGVyU2VydmljZSkge31cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdSdXR0ZXJDb21wb25lbnQgfSBmcm9tICcuL25nLXJ1dHRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmdSdXR0ZXJTZXJ2aWNlT3B0aW9ucywgTmdSdXR0ZXJTZXJ2aWNlIH0gZnJvbSAnLi9uZy1ydXR0ZXIuc2VydmljZSc7XG5cblxuQE5nTW9kdWxlKHtcbiAgXHRpbXBvcnRzOiBbXG4gICAgXHRDb21tb25Nb2R1bGVcbiAgXHRdLFxuICBcdHByb3ZpZGVyczogW1xuXHRcdE5nUnV0dGVyU2VydmljZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHROZ1J1dHRlckNvbXBvbmVudFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0TmdSdXR0ZXJDb21wb25lbnQsXG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgTmdSdXR0ZXJNb2R1bGUge1xuXG4gIHN0YXRpYyBmb3JSb290KCBvcHRpb25zPzogTW9kdWxlT3B0aW9ucyApIDogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gXG5cdFx0cmV0dXJuKHtcblx0XHRcdG5nTW9kdWxlOiBOZ1J1dHRlck1vZHVsZSxcblx0XHRcdHByb3ZpZGVyczogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0cHJvdmlkZTogRk9SX1JPT1RfT1BUSU9OU19UT0tFTixcblx0XHRcdFx0XHR1c2VWYWx1ZTogb3B0aW9uc1xuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0cHJvdmlkZTogTmdSdXR0ZXJTZXJ2aWNlT3B0aW9ucyxcblx0XHRcdFx0XHR1c2VGYWN0b3J5OiBwcm92aWRlTXlTZXJ2aWNlT3B0aW9ucyxcblx0XHRcdFx0XHRkZXBzOiBbIEZPUl9ST09UX09QVElPTlNfVE9LRU4gXVxuXHRcdFx0XHR9LFxuXHRcdFx0XHROZ1J1dHRlclNlcnZpY2Vcblx0XHRcdF1cblx0XHR9KTtcblx0fVxuIH1cblxuXG4vLyBJIGRlZmluZSB0aGUgc2hhcGUgb2YgdGhlIG9wdGlvbmFsIGNvbmZpZ3VyYXRpb24gZGF0YSBwYXNzZWQgdG8gdGhlIGZvclJvb3QoKSBtZXRob2QuXG5leHBvcnQgaW50ZXJmYWNlIE1vZHVsZU9wdGlvbnMge1xuICBQVUJMSUNfQVBJX0tFWT86IHN0cmluZztcbn1cblxuZXhwb3J0IHZhciBGT1JfUk9PVF9PUFRJT05TX1RPS0VOID0gbmV3IEluamVjdGlvblRva2VuPE1vZHVsZU9wdGlvbnM+KCBcImZvclJvb3QoKSBNeVNlcnZpY2UgY29uZmlndXJhdGlvbi5cIiApO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZU15U2VydmljZU9wdGlvbnMoIG9wdGlvbnM/OiBNb2R1bGVPcHRpb25zICkgOiBOZ1J1dHRlclNlcnZpY2VPcHRpb25zIHtcbiBcblx0dmFyIHNlcnZpY2VPcHRpb25zID0gbmV3IE5nUnV0dGVyU2VydmljZU9wdGlvbnMoKTtcblx0aWYgKCBvcHRpb25zICkge1xuIFxuXHRcdGlmICggdHlwZW9mKCBvcHRpb25zLlBVQkxJQ19BUElfS0VZICkgPT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRzZXJ2aWNlT3B0aW9ucy5QVUJMSUNfQVBJX0tFWSA9IG9wdGlvbnMuUFVCTElDX0FQSV9LRVk7XG5cdFx0fVxuXHR9XG4gXG5cdHJldHVybiggc2VydmljZU9wdGlvbnMgKTtcbn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7O0lBYUMsU0FBVSxTQUFTO0lBQ25CLE1BQU8sTUFBTTtJQUNiLE1BQU8sTUFBTTs7Ozs4QkFPbUIsRUFBRTs7OztZQUps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