import { Injectable, Component, Output, EventEmitter, Input, NgModule, InjectionToken, defineInjectable, inject } from '@angular/core';
import { get } from 'scriptjs';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {string} */
var NgRutterEventType = {
    SUCCESS: 'SUCCESS',
    LOAD: 'LOAD',
    EXIT: 'EXIT',
};
var NgRutterServiceOptions = /** @class */ (function () {
    function NgRutterServiceOptions() {
        this.PUBLIC_API_KEY = '';
    }
    NgRutterServiceOptions.decorators = [
        { type: Injectable, args: [{
                    providedIn: "root"
                },] },
    ];
    /** @nocollapse */ NgRutterServiceOptions.ngInjectableDef = defineInjectable({ factory: function NgRutterServiceOptions_Factory() { return new NgRutterServiceOptions(); }, token: NgRutterServiceOptions, providedIn: "root" });
    return NgRutterServiceOptions;
}());
var NgRutterService = /** @class */ (function () {
    function NgRutterService(options) {
        var _this = this;
        this.url = 'https://unpkg.com/@rutter/rutter-link@latest';
        this.options = options;
        this.observable = Observable.create(function (observer) {
            _this.observer = observer;
        });
    }
    /**
     * @return {?}
     */
    NgRutterService.prototype.open = /**
     * @return {?}
     */
    function () {
        this.loadRutter(function () { }, function () { }, function () { });
    };
    /**
     * @param {?} onSuccess
     * @param {?} onLoad
     * @param {?} onExit
     * @return {?}
     */
    NgRutterService.prototype.loadRutter = /**
     * @param {?} onSuccess
     * @param {?} onLoad
     * @param {?} onExit
     * @return {?}
     */
    function (onSuccess, onLoad, onExit) {
        var _this = this;
        /** @type {?} */
        var rutterInstance = Rutter.create({
            publicKey: this.options.PUBLIC_API_KEY,
            onSuccess: function (publicToken) {
                console.log("inner success " + _this.observer);
                _this.observer.next({
                    name: NgRutterEventType.SUCCESS,
                    data: {
                        token: publicToken
                    }
                });
                onSuccess(publicToken);
            },
            onLoad: function () {
                _this.observer.next({
                    name: NgRutterEventType.LOAD
                });
                onLoad();
            },
            onExit: function () {
                _this.observer.next({
                    name: NgRutterEventType.EXIT
                });
                onExit();
            },
        });
        rutterInstance.open();
    };
    /**
     * @return {?}
     */
    NgRutterService.prototype.setup = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            get(_this.url, function () {
                resolve();
            });
        });
    };
    /**
     * @param {?} subscriber
     * @return {?}
     */
    NgRutterService.prototype.destroy = /**
     * @param {?} subscriber
     * @return {?}
     */
    function (subscriber) {
        subscriber.unsubscribe();
    };
    NgRutterService.decorators = [
        { type: Injectable, args: [{
                    providedIn: "root"
                },] },
    ];
    /** @nocollapse */
    NgRutterService.ctorParameters = function () { return [
        { type: NgRutterServiceOptions }
    ]; };
    /** @nocollapse */ NgRutterService.ngInjectableDef = defineInjectable({ factory: function NgRutterService_Factory() { return new NgRutterService(inject(NgRutterServiceOptions)); }, token: NgRutterService, providedIn: "root" });
    return NgRutterService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgRutterComponent = /** @class */ (function () {
    function NgRutterComponent(rutterService) {
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
    NgRutterComponent.prototype.load = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.rutterService.loadRutter(function (publicToken) {
            _this.onSuccess.emit(publicToken);
        }, function () {
            _this.onLoad.emit();
        }, function () {
            _this.onExit.emit();
        });
    };
    /**
     * @return {?}
     */
    NgRutterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.rutterService.setup();
    };
    NgRutterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng-rutter',
                    template: "<div class=\"btn\" (click)=\"load()\" \n[style.background-color]=\"backgroundColor\"\n[style.color]=\"color\"\n\n> {{ text }} </div>",
                    styles: [".btn{display:inline-block;font-weight:400;text-align:center;white-space:nowrap;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid transparent;padding:.375rem .75rem;font-size:1rem;line-height:1.5;border-radius:.25rem;position:relative;color:#fff;background-color:#007bff;font-family:Lato,sans-serif!important;cursor:pointer}"]
                },] },
    ];
    /** @nocollapse */
    NgRutterComponent.ctorParameters = function () { return [
        { type: NgRutterService }
    ]; };
    NgRutterComponent.propDecorators = {
        text: [{ type: Input }],
        backgroundColor: [{ type: Input }],
        color: [{ type: Input }],
        onSuccess: [{ type: Output }],
        onLoad: [{ type: Output }],
        onExit: [{ type: Output }]
    };
    return NgRutterComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgRutterModule = /** @class */ (function () {
    function NgRutterModule() {
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    NgRutterModule.forRoot = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
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
    };
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
    return NgRutterModule;
}());
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

export { NgRutterModule, FOR_ROOT_OPTIONS_TOKEN, provideMyServiceOptions, NgRutterEventType, NgRutterServiceOptions, NgRutterService, NgRutterComponent as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctcnV0dGVyLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZy1ydXR0ZXIvc3JjL2FwcC9tb2R1bGVzL25nLXJ1dHRlci9uZy1ydXR0ZXIuc2VydmljZS50cyIsIm5nOi8vbmctcnV0dGVyL3NyYy9hcHAvbW9kdWxlcy9uZy1ydXR0ZXIvbmctcnV0dGVyLmNvbXBvbmVudC50cyIsIm5nOi8vbmctcnV0dGVyL3NyYy9hcHAvbW9kdWxlcy9uZy1ydXR0ZXIvbmctcnV0dGVyLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnQgdGhlIGNvcmUgYW5ndWxhciBzZXJ2aWNlcy5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgZ2V0IH0gZnJvbSAnc2NyaXB0anMnO1xuaW1wb3J0IHsgT2JzZXJ2ZXIsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiwgb2YgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgZmlsdGVyLCBzaGFyZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJ1xuXG5kZWNsYXJlIHZhciBSdXR0ZXI6IGFueTtcblxuZXhwb3J0IGludGVyZmFjZSBOZ1J1dHRlckV2ZW50IHtcblx0bmFtZTogc3RyaW5nXG5cdGRhdGE/OiBhbnlcbn1cblxuZXhwb3J0IGVudW0gTmdSdXR0ZXJFdmVudFR5cGUge1xuXHRTVUNDRVNTID0gJ1NVQ0NFU1MnLFxuXHRMT0FEID0gJ0xPQUQnLFxuXHRFWElUID0gJ0VYSVQnLFxufVxuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46IFwicm9vdFwiXG59KVxuZXhwb3J0IGNsYXNzIE5nUnV0dGVyU2VydmljZU9wdGlvbnMge1xuXHRwdWJsaWMgUFVCTElDX0FQSV9LRVk6IHN0cmluZyA9ICcnO1xufVxuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46IFwicm9vdFwiXG59KVxuZXhwb3J0IGNsYXNzIE5nUnV0dGVyU2VydmljZSB7XG4gXG5cdHB1YmxpYyBvcHRpb25zOiBOZ1J1dHRlclNlcnZpY2VPcHRpb25zO1xuXHRwdWJsaWMgb2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxOZ1J1dHRlckV2ZW50Pjtcblx0cHVibGljIG9ic2VydmVyOiBPYnNlcnZlcjxhbnk+XG5cdHVybCA9ICdodHRwczovL3VucGtnLmNvbS9AcnV0dGVyL3J1dHRlci1saW5rQGxhdGVzdCc7XG5cblx0b3BlbigpIHtcblx0XHR0aGlzLmxvYWRSdXR0ZXIoKCkgPT4ge30sICgpID0+IHt9LCAoKSA9PiB7fSlcblx0fVxuXG5cdGxvYWRSdXR0ZXIob25TdWNjZXNzLCBvbkxvYWQsIG9uRXhpdCkge1xuXG5cdFx0dmFyIHJ1dHRlckluc3RhbmNlID0gUnV0dGVyLmNyZWF0ZSh7XG5cdFx0XHRwdWJsaWNLZXk6IHRoaXMub3B0aW9ucy5QVUJMSUNfQVBJX0tFWSxcblx0XHRcdG9uU3VjY2VzczogKHB1YmxpY1Rva2VuKSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGBpbm5lciBzdWNjZXNzICR7dGhpcy5vYnNlcnZlcn1gKVxuXG5cdFx0XHRcdHRoaXMub2JzZXJ2ZXIubmV4dCh7XG5cblx0XHRcdFx0XHRuYW1lOiBOZ1J1dHRlckV2ZW50VHlwZS5TVUNDRVNTLFxuXHRcdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHRcdHRva2VuOiBwdWJsaWNUb2tlblxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdFx0b25TdWNjZXNzKHB1YmxpY1Rva2VuKVxuXHRcdFx0fSxcblx0XHRcdG9uTG9hZDogKCkgPT4ge1xuXHRcdFx0XHR0aGlzLm9ic2VydmVyLm5leHQoe1xuXHRcdFx0XHRcdG5hbWU6IE5nUnV0dGVyRXZlbnRUeXBlLkxPQURcblx0XHRcdFx0fSlcblx0XHRcdFx0b25Mb2FkKClcblx0XHRcdH0sXG5cdFx0XHRvbkV4aXQ6ICgpID0+IHtcblx0XHRcdFx0dGhpcy5vYnNlcnZlci5uZXh0KHtcblx0XHRcdFx0XHRuYW1lOiBOZ1J1dHRlckV2ZW50VHlwZS5FWElUXG5cdFx0XHRcdH0pXG5cdFx0XHRcdG9uRXhpdCgpXG5cdFx0XHR9LFxuXHRcdH0pXG5cdFx0XHRcblx0XHRydXR0ZXJJbnN0YW5jZS5vcGVuKCk7XG5cdH1cblxuXHRzZXR1cCgpIHtcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0Z2V0KHRoaXMudXJsLCAoKSA9PiB7XG5cdFx0XHRcdHJlc29sdmUoKVxuXHRcdFx0fSk7XG5cdFx0fSlcblx0fVxuXG5cdGNvbnN0cnVjdG9yKCBvcHRpb25zOiBOZ1J1dHRlclNlcnZpY2VPcHRpb25zICkge1xuXHRcdHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cdFx0dGhpcy5vYnNlcnZhYmxlID0gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyOiBPYnNlcnZlcjxhbnk+KSA9PiB7XG5cdFx0XHR0aGlzLm9ic2VydmVyID0gb2JzZXJ2ZXJcblx0XHR9KVxuXHR9XG5cblx0ZGVzdHJveShzdWJzY3JpYmVyOiBTdWJzY3JpcHRpb24pIHtcblx0XHRzdWJzY3JpYmVyLnVuc3Vic2NyaWJlKCk7XG5cdH1cbn0iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ1J1dHRlclNlcnZpY2UgfSBmcm9tICcuL25nLXJ1dHRlci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmctcnV0dGVyJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiYnRuXCIgKGNsaWNrKT1cImxvYWQoKVwiIFxuW3N0eWxlLmJhY2tncm91bmQtY29sb3JdPVwiYmFja2dyb3VuZENvbG9yXCJcbltzdHlsZS5jb2xvcl09XCJjb2xvclwiXG5cbj4ge3sgdGV4dCB9fSA8L2Rpdj5gLFxuICBzdHlsZXM6IFtgLmJ0bntkaXNwbGF5OmlubGluZS1ibG9jaztmb250LXdlaWdodDo0MDA7dGV4dC1hbGlnbjpjZW50ZXI7d2hpdGUtc3BhY2U6bm93cmFwO3ZlcnRpY2FsLWFsaWduOm1pZGRsZTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7Ym9yZGVyOjFweCBzb2xpZCB0cmFuc3BhcmVudDtwYWRkaW5nOi4zNzVyZW0gLjc1cmVtO2ZvbnQtc2l6ZToxcmVtO2xpbmUtaGVpZ2h0OjEuNTtib3JkZXItcmFkaXVzOi4yNXJlbTtwb3NpdGlvbjpyZWxhdGl2ZTtjb2xvcjojZmZmO2JhY2tncm91bmQtY29sb3I6IzAwN2JmZjtmb250LWZhbWlseTpMYXRvLHNhbnMtc2VyaWYhaW1wb3J0YW50O2N1cnNvcjpwb2ludGVyfWBdXG59KVxuXG5leHBvcnQgY2xhc3MgTmdSdXR0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSB0ZXh0ID0gJ0xvZyBpbic7XG4gIEBJbnB1dCgpIGJhY2tncm91bmRDb2xvciA9ICcjMDAwJztcbiAgQElucHV0KCkgY29sb3IgPSAnI0ZGRic7XG5cbiAgQE91dHB1dCgpIG9uU3VjY2VzcyA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBAT3V0cHV0KCkgb25Mb2FkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgb25FeGl0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGxvYWQoKSB7XG4gICAgdGhpcy5ydXR0ZXJTZXJ2aWNlLmxvYWRSdXR0ZXIoKHB1YmxpY1Rva2VuKSA9PiB7XG4gICAgICB0aGlzLm9uU3VjY2Vzcy5lbWl0KHB1YmxpY1Rva2VuKVxuICAgIH0sICgpID0+IHtcbiAgICAgIHRoaXMub25Mb2FkLmVtaXQoKVxuICAgIH0sICgpID0+IHtcbiAgICAgIHRoaXMub25FeGl0LmVtaXQoKVxuICAgIH0pO1xuICB9XG4gIFxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJ1dHRlclNlcnZpY2Uuc2V0dXAoKVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBydXR0ZXJTZXJ2aWNlOiBOZ1J1dHRlclNlcnZpY2UpIHt9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nUnV0dGVyQ29tcG9uZW50IH0gZnJvbSAnLi9uZy1ydXR0ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5nUnV0dGVyU2VydmljZU9wdGlvbnMsIE5nUnV0dGVyU2VydmljZSB9IGZyb20gJy4vbmctcnV0dGVyLnNlcnZpY2UnO1xuXG5cbkBOZ01vZHVsZSh7XG4gIFx0aW1wb3J0czogW1xuICAgIFx0Q29tbW9uTW9kdWxlXG4gIFx0XSxcbiAgXHRwcm92aWRlcnM6IFtcblx0XHROZ1J1dHRlclNlcnZpY2Vcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0TmdSdXR0ZXJDb21wb25lbnRcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdE5nUnV0dGVyQ29tcG9uZW50LFxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIE5nUnV0dGVyTW9kdWxlIHtcblxuICBzdGF0aWMgZm9yUm9vdCggb3B0aW9ucz86IE1vZHVsZU9wdGlvbnMgKSA6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuIFxuXHRcdHJldHVybih7XG5cdFx0XHRuZ01vZHVsZTogTmdSdXR0ZXJNb2R1bGUsXG5cdFx0XHRwcm92aWRlcnM6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHByb3ZpZGU6IEZPUl9ST09UX09QVElPTlNfVE9LRU4sXG5cdFx0XHRcdFx0dXNlVmFsdWU6IG9wdGlvbnNcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHByb3ZpZGU6IE5nUnV0dGVyU2VydmljZU9wdGlvbnMsXG5cdFx0XHRcdFx0dXNlRmFjdG9yeTogcHJvdmlkZU15U2VydmljZU9wdGlvbnMsXG5cdFx0XHRcdFx0ZGVwczogWyBGT1JfUk9PVF9PUFRJT05TX1RPS0VOIF1cblx0XHRcdFx0fSxcblx0XHRcdFx0TmdSdXR0ZXJTZXJ2aWNlXG5cdFx0XHRdXG5cdFx0fSk7XG5cdH1cbiB9XG5cblxuLy8gSSBkZWZpbmUgdGhlIHNoYXBlIG9mIHRoZSBvcHRpb25hbCBjb25maWd1cmF0aW9uIGRhdGEgcGFzc2VkIHRvIHRoZSBmb3JSb290KCkgbWV0aG9kLlxuZXhwb3J0IGludGVyZmFjZSBNb2R1bGVPcHRpb25zIHtcbiAgUFVCTElDX0FQSV9LRVk/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCB2YXIgRk9SX1JPT1RfT1BUSU9OU19UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxNb2R1bGVPcHRpb25zPiggXCJmb3JSb290KCkgTXlTZXJ2aWNlIGNvbmZpZ3VyYXRpb24uXCIgKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVNeVNlcnZpY2VPcHRpb25zKCBvcHRpb25zPzogTW9kdWxlT3B0aW9ucyApIDogTmdSdXR0ZXJTZXJ2aWNlT3B0aW9ucyB7XG4gXG5cdHZhciBzZXJ2aWNlT3B0aW9ucyA9IG5ldyBOZ1J1dHRlclNlcnZpY2VPcHRpb25zKCk7XG5cdGlmICggb3B0aW9ucyApIHtcbiBcblx0XHRpZiAoIHR5cGVvZiggb3B0aW9ucy5QVUJMSUNfQVBJX0tFWSApID09PSBcInN0cmluZ1wiICkge1xuXHRcdFx0c2VydmljZU9wdGlvbnMuUFVCTElDX0FQSV9LRVkgPSBvcHRpb25zLlBVQkxJQ19BUElfS0VZO1xuXHRcdH1cblx0fVxuIFxuXHRyZXR1cm4oIHNlcnZpY2VPcHRpb25zICk7XG59Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOztJQWFDLFNBQVUsU0FBUztJQUNuQixNQUFPLE1BQU07SUFDYixNQUFPLE1BQU07Ozs7OEJBT21CLEVBQUU7OztnQkFKbEMsVUFBVSxTQUFDO29CQUNYLFVB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