(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('scriptjs'), require('rxjs'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ng-rutter', ['exports', '@angular/core', 'scriptjs', 'rxjs', '@angular/common'], factory) :
    (factory((global['ng-rutter'] = {}),global.ng.core,null,global.rxjs,global.ng.common));
}(this, (function (exports,i0,scriptjs,rxjs,common) { 'use strict';

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
            { type: i0.Injectable, args: [{
                        providedIn: "root"
                    },] },
        ];
        /** @nocollapse */ NgRutterServiceOptions.ngInjectableDef = i0.defineInjectable({ factory: function NgRutterServiceOptions_Factory() { return new NgRutterServiceOptions(); }, token: NgRutterServiceOptions, providedIn: "root" });
        return NgRutterServiceOptions;
    }());
    var NgRutterService = /** @class */ (function () {
        function NgRutterService(options) {
            var _this = this;
            this.url = 'https://unpkg.com/@rutter/rutter-link@latest';
            this.options = options;
            this.observable = rxjs.Observable.create(function (observer) {
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
                    scriptjs.get(_this.url, function () {
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
            { type: i0.Injectable, args: [{
                        providedIn: "root"
                    },] },
        ];
        /** @nocollapse */
        NgRutterService.ctorParameters = function () {
            return [
                { type: NgRutterServiceOptions }
            ];
        };
        /** @nocollapse */ NgRutterService.ngInjectableDef = i0.defineInjectable({ factory: function NgRutterService_Factory() { return new NgRutterService(i0.inject(NgRutterServiceOptions)); }, token: NgRutterService, providedIn: "root" });
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
            this.onSuccess = new i0.EventEmitter();
            this.onLoad = new i0.EventEmitter();
            this.onExit = new i0.EventEmitter();
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
            { type: i0.Component, args: [{
                        selector: 'ng-rutter',
                        template: "<div class=\"btn\" (click)=\"load()\" \n[style.background-color]=\"backgroundColor\"\n[style.color]=\"color\"\n\n> {{ text }} </div>",
                        styles: [".btn{display:inline-block;font-weight:400;text-align:center;white-space:nowrap;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid transparent;padding:.375rem .75rem;font-size:1rem;line-height:1.5;border-radius:.25rem;position:relative;color:#fff;background-color:#007bff;font-family:Lato,sans-serif!important;cursor:pointer}"]
                    },] },
        ];
        /** @nocollapse */
        NgRutterComponent.ctorParameters = function () {
            return [
                { type: NgRutterService }
            ];
        };
        NgRutterComponent.propDecorators = {
            text: [{ type: i0.Input }],
            backgroundColor: [{ type: i0.Input }],
            color: [{ type: i0.Input }],
            onSuccess: [{ type: i0.Output }],
            onLoad: [{ type: i0.Output }],
            onExit: [{ type: i0.Output }]
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
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule
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
    var FOR_ROOT_OPTIONS_TOKEN = new i0.InjectionToken("forRoot() MyService configuration.");
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

    exports.NgRutterModule = NgRutterModule;
    exports.FOR_ROOT_OPTIONS_TOKEN = FOR_ROOT_OPTIONS_TOKEN;
    exports.provideMyServiceOptions = provideMyServiceOptions;
    exports.ɵc = NgRutterComponent;
    exports.ɵb = NgRutterService;
    exports.ɵa = NgRutterServiceOptions;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctcnV0dGVyLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmctcnV0dGVyL3NyYy9hcHAvbW9kdWxlcy9uZy1ydXR0ZXIvbmctcnV0dGVyLnNlcnZpY2UudHMiLCJuZzovL25nLXJ1dHRlci9zcmMvYXBwL21vZHVsZXMvbmctcnV0dGVyL25nLXJ1dHRlci5jb21wb25lbnQudHMiLCJuZzovL25nLXJ1dHRlci9zcmMvYXBwL21vZHVsZXMvbmctcnV0dGVyL25nLXJ1dHRlci5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0IHRoZSBjb3JlIGFuZ3VsYXIgc2VydmljZXMuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IGdldCB9IGZyb20gJ3NjcmlwdGpzJztcbmltcG9ydCB7IE9ic2VydmVyLCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24sIG9mIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IGZpbHRlciwgc2hhcmUgfSBmcm9tICdyeGpzL29wZXJhdG9ycydcblxuZGVjbGFyZSB2YXIgUnV0dGVyOiBhbnk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmdSdXR0ZXJFdmVudCB7XG5cdG5hbWU6IHN0cmluZ1xuXHRkYXRhPzogYW55XG59XG5cbmV4cG9ydCBlbnVtIE5nUnV0dGVyRXZlbnRUeXBlIHtcblx0U1VDQ0VTUyA9ICdTVUNDRVNTJyxcblx0TE9BRCA9ICdMT0FEJyxcblx0RVhJVCA9ICdFWElUJyxcbn1cblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiBcInJvb3RcIlxufSlcbmV4cG9ydCBjbGFzcyBOZ1J1dHRlclNlcnZpY2VPcHRpb25zIHtcblx0cHVibGljIFBVQkxJQ19BUElfS0VZOiBzdHJpbmcgPSAnJztcbn1cblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiBcInJvb3RcIlxufSlcbmV4cG9ydCBjbGFzcyBOZ1J1dHRlclNlcnZpY2Uge1xuIFxuXHRwdWJsaWMgb3B0aW9uczogTmdSdXR0ZXJTZXJ2aWNlT3B0aW9ucztcblx0cHVibGljIG9ic2VydmFibGU6IE9ic2VydmFibGU8TmdSdXR0ZXJFdmVudD47XG5cdHB1YmxpYyBvYnNlcnZlcjogT2JzZXJ2ZXI8YW55PlxuXHR1cmwgPSAnaHR0cHM6Ly91bnBrZy5jb20vQHJ1dHRlci9ydXR0ZXItbGlua0BsYXRlc3QnO1xuXG5cdG9wZW4oKSB7XG5cdFx0dGhpcy5sb2FkUnV0dGVyKCgpID0+IHt9LCAoKSA9PiB7fSwgKCkgPT4ge30pXG5cdH1cblxuXHRsb2FkUnV0dGVyKG9uU3VjY2Vzcywgb25Mb2FkLCBvbkV4aXQpIHtcblxuXHRcdHZhciBydXR0ZXJJbnN0YW5jZSA9IFJ1dHRlci5jcmVhdGUoe1xuXHRcdFx0cHVibGljS2V5OiB0aGlzLm9wdGlvbnMuUFVCTElDX0FQSV9LRVksXG5cdFx0XHRvblN1Y2Nlc3M6IChwdWJsaWNUb2tlbikgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhgaW5uZXIgc3VjY2VzcyAke3RoaXMub2JzZXJ2ZXJ9YClcblxuXHRcdFx0XHR0aGlzLm9ic2VydmVyLm5leHQoe1xuXG5cdFx0XHRcdFx0bmFtZTogTmdSdXR0ZXJFdmVudFR5cGUuU1VDQ0VTUyxcblx0XHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0XHR0b2tlbjogcHVibGljVG9rZW5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHRcdG9uU3VjY2VzcyhwdWJsaWNUb2tlbilcblx0XHRcdH0sXG5cdFx0XHRvbkxvYWQ6ICgpID0+IHtcblx0XHRcdFx0dGhpcy5vYnNlcnZlci5uZXh0KHtcblx0XHRcdFx0XHRuYW1lOiBOZ1J1dHRlckV2ZW50VHlwZS5MT0FEXG5cdFx0XHRcdH0pXG5cdFx0XHRcdG9uTG9hZCgpXG5cdFx0XHR9LFxuXHRcdFx0b25FeGl0OiAoKSA9PiB7XG5cdFx0XHRcdHRoaXMub2JzZXJ2ZXIubmV4dCh7XG5cdFx0XHRcdFx0bmFtZTogTmdSdXR0ZXJFdmVudFR5cGUuRVhJVFxuXHRcdFx0XHR9KVxuXHRcdFx0XHRvbkV4aXQoKVxuXHRcdFx0fSxcblx0XHR9KVxuXHRcdFx0XG5cdFx0cnV0dGVySW5zdGFuY2Uub3BlbigpO1xuXHR9XG5cblx0c2V0dXAoKSB7XG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdGdldCh0aGlzLnVybCwgKCkgPT4ge1xuXHRcdFx0XHRyZXNvbHZlKClcblx0XHRcdH0pO1xuXHRcdH0pXG5cdH1cblxuXHRjb25zdHJ1Y3Rvciggb3B0aW9uczogTmdSdXR0ZXJTZXJ2aWNlT3B0aW9ucyApIHtcblx0XHR0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXHRcdHRoaXMub2JzZXJ2YWJsZSA9IE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcjogT2JzZXJ2ZXI8YW55PikgPT4ge1xuXHRcdFx0dGhpcy5vYnNlcnZlciA9IG9ic2VydmVyXG5cdFx0fSlcblx0fVxuXG5cdGRlc3Ryb3koc3Vic2NyaWJlcjogU3Vic2NyaXB0aW9uKSB7XG5cdFx0c3Vic2NyaWJlci51bnN1YnNjcmliZSgpO1xuXHR9XG59IiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdSdXR0ZXJTZXJ2aWNlIH0gZnJvbSAnLi9uZy1ydXR0ZXIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nLXJ1dHRlcicsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImJ0blwiIChjbGljayk9XCJsb2FkKClcIiBcbltzdHlsZS5iYWNrZ3JvdW5kLWNvbG9yXT1cImJhY2tncm91bmRDb2xvclwiXG5bc3R5bGUuY29sb3JdPVwiY29sb3JcIlxuXG4+IHt7IHRleHQgfX0gPC9kaXY+YCxcbiAgc3R5bGVzOiBbYC5idG57ZGlzcGxheTppbmxpbmUtYmxvY2s7Zm9udC13ZWlnaHQ6NDAwO3RleHQtYWxpZ246Y2VudGVyO3doaXRlLXNwYWNlOm5vd3JhcDt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO2JvcmRlcjoxcHggc29saWQgdHJhbnNwYXJlbnQ7cGFkZGluZzouMzc1cmVtIC43NXJlbTtmb250LXNpemU6MXJlbTtsaW5lLWhlaWdodDoxLjU7Ym9yZGVyLXJhZGl1czouMjVyZW07cG9zaXRpb246cmVsYXRpdmU7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiMwMDdiZmY7Zm9udC1mYW1pbHk6TGF0byxzYW5zLXNlcmlmIWltcG9ydGFudDtjdXJzb3I6cG9pbnRlcn1gXVxufSlcblxuZXhwb3J0IGNsYXNzIE5nUnV0dGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgdGV4dCA9ICdMb2cgaW4nO1xuICBASW5wdXQoKSBiYWNrZ3JvdW5kQ29sb3IgPSAnIzAwMCc7XG4gIEBJbnB1dCgpIGNvbG9yID0gJyNGRkYnO1xuXG4gIEBPdXRwdXQoKSBvblN1Y2Nlc3MgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQE91dHB1dCgpIG9uTG9hZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG9uRXhpdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBsb2FkKCkge1xuICAgIHRoaXMucnV0dGVyU2VydmljZS5sb2FkUnV0dGVyKChwdWJsaWNUb2tlbikgPT4ge1xuICAgICAgdGhpcy5vblN1Y2Nlc3MuZW1pdChwdWJsaWNUb2tlbilcbiAgICB9LCAoKSA9PiB7XG4gICAgICB0aGlzLm9uTG9hZC5lbWl0KClcbiAgICB9LCAoKSA9PiB7XG4gICAgICB0aGlzLm9uRXhpdC5lbWl0KClcbiAgICB9KTtcbiAgfVxuICBcbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5ydXR0ZXJTZXJ2aWNlLnNldHVwKClcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcnV0dGVyU2VydmljZTogTmdSdXR0ZXJTZXJ2aWNlKSB7fVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ1J1dHRlckNvbXBvbmVudCB9IGZyb20gJy4vbmctcnV0dGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOZ1J1dHRlclNlcnZpY2VPcHRpb25zLCBOZ1J1dHRlclNlcnZpY2UgfSBmcm9tICcuL25nLXJ1dHRlci5zZXJ2aWNlJztcblxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuXHROZ1J1dHRlclNlcnZpY2Vcbl0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE5nUnV0dGVyQ29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6IFtcblx0TmdSdXR0ZXJDb21wb25lbnQsXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTmdSdXR0ZXJNb2R1bGUge1xuXG4gIHN0YXRpYyBmb3JSb290KCBvcHRpb25zPzogTW9kdWxlT3B0aW9ucyApIDogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gXG5cdFx0cmV0dXJuKHtcblx0XHRcdG5nTW9kdWxlOiBOZ1J1dHRlck1vZHVsZSxcblx0XHRcdHByb3ZpZGVyczogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0cHJvdmlkZTogRk9SX1JPT1RfT1BUSU9OU19UT0tFTixcblx0XHRcdFx0XHR1c2VWYWx1ZTogb3B0aW9uc1xuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0cHJvdmlkZTogTmdSdXR0ZXJTZXJ2aWNlT3B0aW9ucyxcblx0XHRcdFx0XHR1c2VGYWN0b3J5OiBwcm92aWRlTXlTZXJ2aWNlT3B0aW9ucyxcblx0XHRcdFx0XHRkZXBzOiBbIEZPUl9ST09UX09QVElPTlNfVE9LRU4gXVxuXHRcdFx0XHR9LFxuXHRcdFx0XHROZ1J1dHRlclNlcnZpY2Vcblx0XHRcdF1cblx0XHR9KTtcblx0fVxuIH1cblxuXG4vLyBJIGRlZmluZSB0aGUgc2hhcGUgb2YgdGhlIG9wdGlvbmFsIGNvbmZpZ3VyYXRpb24gZGF0YSBwYXNzZWQgdG8gdGhlIGZvclJvb3QoKSBtZXRob2QuXG5leHBvcnQgaW50ZXJmYWNlIE1vZHVsZU9wdGlvbnMge1xuICBQVUJMSUNfQVBJX0tFWT86IHN0cmluZztcbn1cblxuZXhwb3J0IHZhciBGT1JfUk9PVF9PUFRJT05TX1RPS0VOID0gbmV3IEluamVjdGlvblRva2VuPE1vZHVsZU9wdGlvbnM+KCBcImZvclJvb3QoKSBNeVNlcnZpY2UgY29uZmlndXJhdGlvbi5cIiApO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZU15U2VydmljZU9wdGlvbnMoIG9wdGlvbnM/OiBNb2R1bGVPcHRpb25zICkgOiBOZ1J1dHRlclNlcnZpY2VPcHRpb25zIHtcbiBcblx0dmFyIHNlcnZpY2VPcHRpb25zID0gbmV3IE5nUnV0dGVyU2VydmljZU9wdGlvbnMoKTtcblx0aWYgKCBvcHRpb25zICkge1xuIFxuXHRcdGlmICggdHlwZW9mKCBvcHRpb25zLlBVQkxJQ19BUElfS0VZICkgPT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRzZXJ2aWNlT3B0aW9ucy5QVUJMSUNfQVBJX0tFWSA9IG9wdGlvbnMuUFVCTElDX0FQSV9LRVk7XG5cdFx0fVxuXHR9XG4gXG5cdHJldHVybiggc2VydmljZU9wdGlvbnMgKTtcbn0iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsIk9ic2VydmFibGUiLCJnZXQiLCJFdmVudEVtaXR0ZXIiLCJDb21wb25lbnQiLCJJbnB1dCIsIk91dHB1dCIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiSW5qZWN0aW9uVG9rZW4iXSwibWFwcGlu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