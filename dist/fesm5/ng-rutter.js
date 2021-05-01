import { Injectable, Component, Output, EventEmitter, Input, NgModule, defineInjectable, inject, InjectionToken } from '@angular/core';
import { get } from 'scriptjs';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
        this.url = 'https://unpkg.com/@rutter/rutter-link@latest';
        this.options = options;
    }
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
        /** @type {?} */
        var rutterInstance = Rutter.create({
            publicKey: this.options.PUBLIC_API_KEY,
            onSuccess: function (publicToken) {
                onSuccess(publicToken);
            },
            onLoad: onLoad(),
            onExit: onExit(),
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
                }
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

export { NgRutterModule, FOR_ROOT_OPTIONS_TOKEN, provideMyServiceOptions, NgRutterComponent as ɵc, NgRutterService as ɵb, NgRutterServiceOptions as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctcnV0dGVyLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZy1ydXR0ZXIvc3JjL2FwcC9tb2R1bGVzL25nLXJ1dHRlci9uZy1ydXR0ZXIuc2VydmljZS50cyIsIm5nOi8vbmctcnV0dGVyL3NyYy9hcHAvbW9kdWxlcy9uZy1ydXR0ZXIvbmctcnV0dGVyLmNvbXBvbmVudC50cyIsIm5nOi8vbmctcnV0dGVyL3NyYy9hcHAvbW9kdWxlcy9uZy1ydXR0ZXIvbmctcnV0dGVyLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnQgdGhlIGNvcmUgYW5ndWxhciBzZXJ2aWNlcy5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgZ2V0IH0gZnJvbSAnc2NyaXB0anMnO1xuXG5kZWNsYXJlIHZhciBSdXR0ZXI6IGFueTtcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiBcInJvb3RcIlxufSlcbmV4cG9ydCBjbGFzcyBOZ1J1dHRlclNlcnZpY2VPcHRpb25zIHtcblx0cHVibGljIFBVQkxJQ19BUElfS0VZOiBzdHJpbmcgPSAnJztcbn1cblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiBcInJvb3RcIlxufSlcbmV4cG9ydCBjbGFzcyBOZ1J1dHRlclNlcnZpY2Uge1xuIFxuXHRwdWJsaWMgb3B0aW9uczogTmdSdXR0ZXJTZXJ2aWNlT3B0aW9ucztcblx0dXJsID0gJ2h0dHBzOi8vdW5wa2cuY29tL0BydXR0ZXIvcnV0dGVyLWxpbmtAbGF0ZXN0JztcblxuXHRsb2FkUnV0dGVyKG9uU3VjY2Vzcywgb25Mb2FkLCBvbkV4aXQpIHtcblxuXHRcdHZhciBydXR0ZXJJbnN0YW5jZSA9IFJ1dHRlci5jcmVhdGUoe1xuXHRcdFx0cHVibGljS2V5OiB0aGlzLm9wdGlvbnMuUFVCTElDX0FQSV9LRVksXG5cdFx0XHRvblN1Y2Nlc3M6IGZ1bmN0aW9uIChwdWJsaWNUb2tlbikge1xuXHRcdFx0XHRvblN1Y2Nlc3MocHVibGljVG9rZW4pXG5cdFx0XHR9LFxuXHRcdFx0b25Mb2FkOiBvbkxvYWQoKSxcblx0XHRcdG9uRXhpdDogb25FeGl0KCksXG5cdFx0fSlcblx0XHRcdFxuXHRcdHJ1dHRlckluc3RhbmNlLm9wZW4oKTtcblx0fVxuXG5cdHNldHVwKCkge1xuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRnZXQodGhpcy51cmwsICgpID0+IHtcblx0XHRcdFx0cmVzb2x2ZSgpXG5cdFx0XHR9KTtcblx0XHR9KVxuXHR9XG5cdFxuXHRjb25zdHJ1Y3Rvciggb3B0aW9uczogTmdSdXR0ZXJTZXJ2aWNlT3B0aW9ucyApIHtcblx0XHR0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXHR9XG59IiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdSdXR0ZXJTZXJ2aWNlIH0gZnJvbSAnLi9uZy1ydXR0ZXIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nLXJ1dHRlcicsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImJ0blwiIChjbGljayk9XCJsb2FkKClcIiBcbltzdHlsZS5iYWNrZ3JvdW5kLWNvbG9yXT1cImJhY2tncm91bmRDb2xvclwiXG5bc3R5bGUuY29sb3JdPVwiY29sb3JcIlxuXG4+IHt7IHRleHQgfX0gPC9kaXY+YCxcbiAgc3R5bGVzOiBbYC5idG57ZGlzcGxheTppbmxpbmUtYmxvY2s7Zm9udC13ZWlnaHQ6NDAwO3RleHQtYWxpZ246Y2VudGVyO3doaXRlLXNwYWNlOm5vd3JhcDt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO2JvcmRlcjoxcHggc29saWQgdHJhbnNwYXJlbnQ7cGFkZGluZzouMzc1cmVtIC43NXJlbTtmb250LXNpemU6MXJlbTtsaW5lLWhlaWdodDoxLjU7Ym9yZGVyLXJhZGl1czouMjVyZW07cG9zaXRpb246cmVsYXRpdmU7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiMwMDdiZmY7Zm9udC1mYW1pbHk6TGF0byxzYW5zLXNlcmlmIWltcG9ydGFudDtjdXJzb3I6cG9pbnRlcn1gXVxufSlcblxuZXhwb3J0IGNsYXNzIE5nUnV0dGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgdGV4dCA9ICdMb2cgaW4nO1xuICBASW5wdXQoKSBiYWNrZ3JvdW5kQ29sb3IgPSAnIzAwMCc7XG4gIEBJbnB1dCgpIGNvbG9yID0gJyNGRkYnO1xuXG4gIEBPdXRwdXQoKSBvblN1Y2Nlc3MgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQE91dHB1dCgpIG9uTG9hZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG9uRXhpdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBsb2FkKCkge1xuICAgIHRoaXMucnV0dGVyU2VydmljZS5sb2FkUnV0dGVyKChwdWJsaWNUb2tlbikgPT4ge1xuICAgICAgdGhpcy5vblN1Y2Nlc3MuZW1pdChwdWJsaWNUb2tlbilcbiAgICB9LCAoKSA9PiB7XG4gICAgICB0aGlzLm9uTG9hZC5lbWl0KClcbiAgICB9LCAoKSA9PiB7XG4gICAgICB0aGlzLm9uRXhpdC5lbWl0KClcbiAgICB9KTtcbiAgfVxuICBcbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5ydXR0ZXJTZXJ2aWNlLnNldHVwKClcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcnV0dGVyU2VydmljZTogTmdSdXR0ZXJTZXJ2aWNlKSB7fVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ1J1dHRlckNvbXBvbmVudCB9IGZyb20gJy4vbmctcnV0dGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOZ1J1dHRlclNlcnZpY2VPcHRpb25zLCBOZ1J1dHRlclNlcnZpY2UgfSBmcm9tICcuL25nLXJ1dHRlci5zZXJ2aWNlJztcblxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuXHROZ1J1dHRlclNlcnZpY2Vcbl0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE5nUnV0dGVyQ29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6IFtcblx0TmdSdXR0ZXJDb21wb25lbnQsXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTmdSdXR0ZXJNb2R1bGUge1xuXG4gIHN0YXRpYyBmb3JSb290KCBvcHRpb25zPzogTW9kdWxlT3B0aW9ucyApIDogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gXG5cdFx0cmV0dXJuKHtcblx0XHRcdG5nTW9kdWxlOiBOZ1J1dHRlck1vZHVsZSxcblx0XHRcdHByb3ZpZGVyczogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0cHJvdmlkZTogRk9SX1JPT1RfT1BUSU9OU19UT0tFTixcblx0XHRcdFx0XHR1c2VWYWx1ZTogb3B0aW9uc1xuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0cHJvdmlkZTogTmdSdXR0ZXJTZXJ2aWNlT3B0aW9ucyxcblx0XHRcdFx0XHR1c2VGYWN0b3J5OiBwcm92aWRlTXlTZXJ2aWNlT3B0aW9ucyxcblx0XHRcdFx0XHRkZXBzOiBbIEZPUl9ST09UX09QVElPTlNfVE9LRU4gXVxuXHRcdFx0XHR9XG5cdFx0XHRdXG5cdFx0fSk7XG5cdH1cbiB9XG5cblxuLy8gSSBkZWZpbmUgdGhlIHNoYXBlIG9mIHRoZSBvcHRpb25hbCBjb25maWd1cmF0aW9uIGRhdGEgcGFzc2VkIHRvIHRoZSBmb3JSb290KCkgbWV0aG9kLlxuZXhwb3J0IGludGVyZmFjZSBNb2R1bGVPcHRpb25zIHtcbiAgUFVCTElDX0FQSV9LRVk/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCB2YXIgRk9SX1JPT1RfT1BUSU9OU19UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxNb2R1bGVPcHRpb25zPiggXCJmb3JSb290KCkgTXlTZXJ2aWNlIGNvbmZpZ3VyYXRpb24uXCIgKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVNeVNlcnZpY2VPcHRpb25zKCBvcHRpb25zPzogTW9kdWxlT3B0aW9ucyApIDogTmdSdXR0ZXJTZXJ2aWNlT3B0aW9ucyB7XG4gXG5cdHZhciBzZXJ2aWNlT3B0aW9ucyA9IG5ldyBOZ1J1dHRlclNlcnZpY2VPcHRpb25zKCk7XG5cdGlmICggb3B0aW9ucyApIHtcbiBcblx0XHRpZiAoIHR5cGVvZiggb3B0aW9ucy5QVUJMSUNfQVBJX0tFWSApID09PSBcInN0cmluZ1wiICkge1xuXHRcdFx0c2VydmljZU9wdGlvbnMuUFVCTElDX0FQSV9LRVkgPSBvcHRpb25zLlBVQkxJQ19BUElfS0VZO1xuXHRcdH1cblx0fVxuIFxuXHRyZXR1cm4oIHNlcnZpY2VPcHRpb25zICk7XG59Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7OzhCQVNpQyxFQUFFOzs7Z0JBSmxDLFVBQVUsU0FBQztvQkFDWCxVQUFVLEVBQUUsTUFBTTtpQkFDbEI7OztpQ0FSRDs7O0lBMkNDLHlCQUFhLE9BQStCO21CQXhCdEMsOENBQThDO1FBeUJuRCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztLQUN2Qjs7Ozs7OztJQXhCRCxvQ0FBVTs7Ozs7O0lBQVYsVUFBVyxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU07O1FBRW5DLElBQUksY0FBYyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDbEMsU0FBUyxFQUFFLElBQUksQ0FB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