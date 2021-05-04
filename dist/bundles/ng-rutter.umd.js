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
            this.setup();
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
    exports.NgRutterEventType = NgRutterEventType;
    exports.NgRutterServiceOptions = NgRutterServiceOptions;
    exports.NgRutterService = NgRutterService;
    exports.ɵa = NgRutterComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctcnV0dGVyLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmctcnV0dGVyL3NyYy9hcHAvbW9kdWxlcy9uZy1ydXR0ZXIvbmctcnV0dGVyLnNlcnZpY2UudHMiLCJuZzovL25nLXJ1dHRlci9zcmMvYXBwL21vZHVsZXMvbmctcnV0dGVyL25nLXJ1dHRlci5jb21wb25lbnQudHMiLCJuZzovL25nLXJ1dHRlci9zcmMvYXBwL21vZHVsZXMvbmctcnV0dGVyL25nLXJ1dHRlci5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0IHRoZSBjb3JlIGFuZ3VsYXIgc2VydmljZXMuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IGdldCB9IGZyb20gJ3NjcmlwdGpzJztcbmltcG9ydCB7IE9ic2VydmVyLCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24sIG9mIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IGZpbHRlciwgc2hhcmUgfSBmcm9tICdyeGpzL29wZXJhdG9ycydcblxuZGVjbGFyZSB2YXIgUnV0dGVyOiBhbnk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmdSdXR0ZXJFdmVudCB7XG5cdG5hbWU6IHN0cmluZ1xuXHRkYXRhPzogYW55XG59XG5cbmV4cG9ydCBlbnVtIE5nUnV0dGVyRXZlbnRUeXBlIHtcblx0U1VDQ0VTUyA9ICdTVUNDRVNTJyxcblx0TE9BRCA9ICdMT0FEJyxcblx0RVhJVCA9ICdFWElUJyxcbn1cblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiBcInJvb3RcIlxufSlcbmV4cG9ydCBjbGFzcyBOZ1J1dHRlclNlcnZpY2VPcHRpb25zIHtcblx0cHVibGljIFBVQkxJQ19BUElfS0VZOiBzdHJpbmcgPSAnJztcbn1cblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiBcInJvb3RcIlxufSlcbmV4cG9ydCBjbGFzcyBOZ1J1dHRlclNlcnZpY2Uge1xuIFxuXHRwdWJsaWMgb3B0aW9uczogTmdSdXR0ZXJTZXJ2aWNlT3B0aW9ucztcblx0cHVibGljIG9ic2VydmFibGU6IE9ic2VydmFibGU8TmdSdXR0ZXJFdmVudD47XG5cdHB1YmxpYyBvYnNlcnZlcjogT2JzZXJ2ZXI8YW55PlxuXHR1cmwgPSAnaHR0cHM6Ly91bnBrZy5jb20vQHJ1dHRlci9ydXR0ZXItbGlua0BsYXRlc3QnO1xuXG5cdG9wZW4oKSB7XG5cdFx0dGhpcy5sb2FkUnV0dGVyKCgpID0+IHt9LCAoKSA9PiB7fSwgKCkgPT4ge30pXG5cdH1cblxuXHRsb2FkUnV0dGVyKG9uU3VjY2Vzcywgb25Mb2FkLCBvbkV4aXQpIHtcblxuXHRcdHZhciBydXR0ZXJJbnN0YW5jZSA9IFJ1dHRlci5jcmVhdGUoe1xuXHRcdFx0cHVibGljS2V5OiB0aGlzLm9wdGlvbnMuUFVCTElDX0FQSV9LRVksXG5cdFx0XHRvblN1Y2Nlc3M6IChwdWJsaWNUb2tlbikgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhgaW5uZXIgc3VjY2VzcyAke3RoaXMub2JzZXJ2ZXJ9YClcblxuXHRcdFx0XHR0aGlzLm9ic2VydmVyLm5leHQoe1xuXG5cdFx0XHRcdFx0bmFtZTogTmdSdXR0ZXJFdmVudFR5cGUuU1VDQ0VTUyxcblx0XHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0XHR0b2tlbjogcHVibGljVG9rZW5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHRcdG9uU3VjY2VzcyhwdWJsaWNUb2tlbilcblx0XHRcdH0sXG5cdFx0XHRvbkxvYWQ6ICgpID0+IHtcblx0XHRcdFx0dGhpcy5vYnNlcnZlci5uZXh0KHtcblx0XHRcdFx0XHRuYW1lOiBOZ1J1dHRlckV2ZW50VHlwZS5MT0FEXG5cdFx0XHRcdH0pXG5cdFx0XHRcdG9uTG9hZCgpXG5cdFx0XHR9LFxuXHRcdFx0b25FeGl0OiAoKSA9PiB7XG5cdFx0XHRcdHRoaXMub2JzZXJ2ZXIubmV4dCh7XG5cdFx0XHRcdFx0bmFtZTogTmdSdXR0ZXJFdmVudFR5cGUuRVhJVFxuXHRcdFx0XHR9KVxuXHRcdFx0XHRvbkV4aXQoKVxuXHRcdFx0fSxcblx0XHR9KVxuXHRcdFx0XG5cdFx0cnV0dGVySW5zdGFuY2Uub3BlbigpO1xuXHR9XG5cblx0c2V0dXAoKSB7XG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdGdldCh0aGlzLnVybCwgKCkgPT4ge1xuXHRcdFx0XHRyZXNvbHZlKClcblx0XHRcdH0pO1xuXHRcdH0pXG5cdH1cblxuXHRjb25zdHJ1Y3Rvciggb3B0aW9uczogTmdSdXR0ZXJTZXJ2aWNlT3B0aW9ucyApIHtcblx0XHR0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXHRcdHRoaXMub2JzZXJ2YWJsZSA9IE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcjogT2JzZXJ2ZXI8YW55PikgPT4ge1xuXHRcdFx0dGhpcy5vYnNlcnZlciA9IG9ic2VydmVyXG5cdFx0fSlcblxuXHRcdHRoaXMuc2V0dXAoKVxuXHR9XG5cblx0ZGVzdHJveShzdWJzY3JpYmVyOiBTdWJzY3JpcHRpb24pIHtcblx0XHRzdWJzY3JpYmVyLnVuc3Vic2NyaWJlKCk7XG5cdH1cbn0iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ1J1dHRlclNlcnZpY2UgfSBmcm9tICcuL25nLXJ1dHRlci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmctcnV0dGVyJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiYnRuXCIgKGNsaWNrKT1cImxvYWQoKVwiIFxuW3N0eWxlLmJhY2tncm91bmQtY29sb3JdPVwiYmFja2dyb3VuZENvbG9yXCJcbltzdHlsZS5jb2xvcl09XCJjb2xvclwiXG5cbj4ge3sgdGV4dCB9fSA8L2Rpdj5gLFxuICBzdHlsZXM6IFtgLmJ0bntkaXNwbGF5OmlubGluZS1ibG9jaztmb250LXdlaWdodDo0MDA7dGV4dC1hbGlnbjpjZW50ZXI7d2hpdGUtc3BhY2U6bm93cmFwO3ZlcnRpY2FsLWFsaWduOm1pZGRsZTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7Ym9yZGVyOjFweCBzb2xpZCB0cmFuc3BhcmVudDtwYWRkaW5nOi4zNzVyZW0gLjc1cmVtO2ZvbnQtc2l6ZToxcmVtO2xpbmUtaGVpZ2h0OjEuNTtib3JkZXItcmFkaXVzOi4yNXJlbTtwb3NpdGlvbjpyZWxhdGl2ZTtjb2xvcjojZmZmO2JhY2tncm91bmQtY29sb3I6IzAwN2JmZjtmb250LWZhbWlseTpMYXRvLHNhbnMtc2VyaWYhaW1wb3J0YW50O2N1cnNvcjpwb2ludGVyfWBdXG59KVxuXG5leHBvcnQgY2xhc3MgTmdSdXR0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSB0ZXh0ID0gJ0xvZyBpbic7XG4gIEBJbnB1dCgpIGJhY2tncm91bmRDb2xvciA9ICcjMDAwJztcbiAgQElucHV0KCkgY29sb3IgPSAnI0ZGRic7XG5cbiAgQE91dHB1dCgpIG9uU3VjY2VzcyA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBAT3V0cHV0KCkgb25Mb2FkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgb25FeGl0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGxvYWQoKSB7XG4gICAgdGhpcy5ydXR0ZXJTZXJ2aWNlLmxvYWRSdXR0ZXIoKHB1YmxpY1Rva2VuKSA9PiB7XG4gICAgICB0aGlzLm9uU3VjY2Vzcy5lbWl0KHB1YmxpY1Rva2VuKVxuICAgIH0sICgpID0+IHtcbiAgICAgIHRoaXMub25Mb2FkLmVtaXQoKVxuICAgIH0sICgpID0+IHtcbiAgICAgIHRoaXMub25FeGl0LmVtaXQoKVxuICAgIH0pO1xuICB9XG4gIFxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJ1dHRlclNlcnZpY2Uuc2V0dXAoKVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBydXR0ZXJTZXJ2aWNlOiBOZ1J1dHRlclNlcnZpY2UpIHt9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nUnV0dGVyQ29tcG9uZW50IH0gZnJvbSAnLi9uZy1ydXR0ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5nUnV0dGVyU2VydmljZU9wdGlvbnMsIE5nUnV0dGVyU2VydmljZSB9IGZyb20gJy4vbmctcnV0dGVyLnNlcnZpY2UnO1xuXG5cbkBOZ01vZHVsZSh7XG4gIFx0aW1wb3J0czogW1xuICAgIFx0Q29tbW9uTW9kdWxlXG4gIFx0XSxcbiAgXHRwcm92aWRlcnM6IFtcblx0XHROZ1J1dHRlclNlcnZpY2Vcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0TmdSdXR0ZXJDb21wb25lbnRcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdE5nUnV0dGVyQ29tcG9uZW50LFxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIE5nUnV0dGVyTW9kdWxlIHtcblxuICBzdGF0aWMgZm9yUm9vdCggb3B0aW9ucz86IE1vZHVsZU9wdGlvbnMgKSA6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuIFxuXHRcdHJldHVybih7XG5cdFx0XHRuZ01vZHVsZTogTmdSdXR0ZXJNb2R1bGUsXG5cdFx0XHRwcm92aWRlcnM6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHByb3ZpZGU6IEZPUl9ST09UX09QVElPTlNfVE9LRU4sXG5cdFx0XHRcdFx0dXNlVmFsdWU6IG9wdGlvbnNcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHByb3ZpZGU6IE5nUnV0dGVyU2VydmljZU9wdGlvbnMsXG5cdFx0XHRcdFx0dXNlRmFjdG9yeTogcHJvdmlkZU15U2VydmljZU9wdGlvbnMsXG5cdFx0XHRcdFx0ZGVwczogWyBGT1JfUk9PVF9PUFRJT05TX1RPS0VOIF1cblx0XHRcdFx0fSxcblx0XHRcdFx0TmdSdXR0ZXJTZXJ2aWNlXG5cdFx0XHRdXG5cdFx0fSk7XG5cdH1cbiB9XG5cblxuLy8gSSBkZWZpbmUgdGhlIHNoYXBlIG9mIHRoZSBvcHRpb25hbCBjb25maWd1cmF0aW9uIGRhdGEgcGFzc2VkIHRvIHRoZSBmb3JSb290KCkgbWV0aG9kLlxuZXhwb3J0IGludGVyZmFjZSBNb2R1bGVPcHRpb25zIHtcbiAgUFVCTElDX0FQSV9LRVk/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCB2YXIgRk9SX1JPT1RfT1BUSU9OU19UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxNb2R1bGVPcHRpb25zPiggXCJmb3JSb290KCkgTXlTZXJ2aWNlIGNvbmZpZ3VyYXRpb24uXCIgKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVNeVNlcnZpY2VPcHRpb25zKCBvcHRpb25zPzogTW9kdWxlT3B0aW9ucyApIDogTmdSdXR0ZXJTZXJ2aWNlT3B0aW9ucyB7XG4gXG5cdHZhciBzZXJ2aWNlT3B0aW9ucyA9IG5ldyBOZ1J1dHRlclNlcnZpY2VPcHRpb25zKCk7XG5cdGlmICggb3B0aW9ucyApIHtcbiBcblx0XHRpZiAoIHR5cGVvZiggb3B0aW9ucy5QVUJMSUNfQVBJX0tFWSApID09PSBcInN0cmluZ1wiICkge1xuXHRcdFx0c2VydmljZU9wdGlvbnMuUFVCTElDX0FQSV9LRVkgPSBvcHRpb25zLlBVQkxJQ19BUElfS0VZO1xuXHRcdH1cblx0fVxuIFxuXHRyZXR1cm4oIHNlcnZpY2VPcHRpb25zICk7XG59Il0sIm5hbWVzIjpbIkluamVjdGFibGUiLCJPYnNlcnZhYmxlIiwiZ2V0IiwiRXZlbnRFbWl0dGVyIiwiQ29tcG9uZW50IiwiSW5wdXQiLCJPdXRwdXQiLCJOZ01vZHVsZSIsIkNvbW1v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