(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('scriptjs'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ng-rutter', ['exports', '@angular/core', 'scriptjs', '@angular/common'], factory) :
    (factory((global['ng-rutter'] = {}),global.ng.core,null,global.ng.common));
}(this, (function (exports,i0,scriptjs,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
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
                    scriptjs.get(_this.url, function () {
                        resolve();
                    });
                });
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
                        }
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctcnV0dGVyLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmctcnV0dGVyL3NyYy9hcHAvbW9kdWxlcy9uZy1ydXR0ZXIvbmctcnV0dGVyLnNlcnZpY2UudHMiLCJuZzovL25nLXJ1dHRlci9zcmMvYXBwL21vZHVsZXMvbmctcnV0dGVyL25nLXJ1dHRlci5jb21wb25lbnQudHMiLCJuZzovL25nLXJ1dHRlci9zcmMvYXBwL21vZHVsZXMvbmctcnV0dGVyL25nLXJ1dHRlci5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0IHRoZSBjb3JlIGFuZ3VsYXIgc2VydmljZXMuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IGdldCB9IGZyb20gJ3NjcmlwdGpzJztcblxuZGVjbGFyZSB2YXIgUnV0dGVyOiBhbnk7XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogXCJyb290XCJcbn0pXG5leHBvcnQgY2xhc3MgTmdSdXR0ZXJTZXJ2aWNlT3B0aW9ucyB7XG5cdHB1YmxpYyBQVUJMSUNfQVBJX0tFWTogc3RyaW5nID0gJyc7XG59XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogXCJyb290XCJcbn0pXG5leHBvcnQgY2xhc3MgTmdSdXR0ZXJTZXJ2aWNlIHtcbiBcblx0cHVibGljIG9wdGlvbnM6IE5nUnV0dGVyU2VydmljZU9wdGlvbnM7XG5cdHVybCA9ICdodHRwczovL3VucGtnLmNvbS9AcnV0dGVyL3J1dHRlci1saW5rQGxhdGVzdCc7XG5cblx0bG9hZFJ1dHRlcihvblN1Y2Nlc3MsIG9uTG9hZCwgb25FeGl0KSB7XG5cblx0XHR2YXIgcnV0dGVySW5zdGFuY2UgPSBSdXR0ZXIuY3JlYXRlKHtcblx0XHRcdHB1YmxpY0tleTogdGhpcy5vcHRpb25zLlBVQkxJQ19BUElfS0VZLFxuXHRcdFx0b25TdWNjZXNzOiBmdW5jdGlvbiAocHVibGljVG9rZW4pIHtcblx0XHRcdFx0b25TdWNjZXNzKHB1YmxpY1Rva2VuKVxuXHRcdFx0fSxcblx0XHRcdG9uTG9hZDogb25Mb2FkKCksXG5cdFx0XHRvbkV4aXQ6IG9uRXhpdCgpLFxuXHRcdH0pXG5cdFx0XHRcblx0XHRydXR0ZXJJbnN0YW5jZS5vcGVuKCk7XG5cdH1cblxuXHRzZXR1cCgpIHtcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0Z2V0KHRoaXMudXJsLCAoKSA9PiB7XG5cdFx0XHRcdHJlc29sdmUoKVxuXHRcdFx0fSk7XG5cdFx0fSlcblx0fVxuXHRcblx0Y29uc3RydWN0b3IoIG9wdGlvbnM6IE5nUnV0dGVyU2VydmljZU9wdGlvbnMgKSB7XG5cdFx0dGhpcy5vcHRpb25zID0gb3B0aW9ucztcblx0fVxufSIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nUnV0dGVyU2VydmljZSB9IGZyb20gJy4vbmctcnV0dGVyLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZy1ydXR0ZXInLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJidG5cIiAoY2xpY2spPVwibG9hZCgpXCIgXG5bc3R5bGUuYmFja2dyb3VuZC1jb2xvcl09XCJiYWNrZ3JvdW5kQ29sb3JcIlxuW3N0eWxlLmNvbG9yXT1cImNvbG9yXCJcblxuPiB7eyB0ZXh0IH19IDwvZGl2PmAsXG4gIHN0eWxlczogW2AuYnRue2Rpc3BsYXk6aW5saW5lLWJsb2NrO2ZvbnQtd2VpZ2h0OjQwMDt0ZXh0LWFsaWduOmNlbnRlcjt3aGl0ZS1zcGFjZTpub3dyYXA7dmVydGljYWwtYWxpZ246bWlkZGxlOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTtib3JkZXI6MXB4IHNvbGlkIHRyYW5zcGFyZW50O3BhZGRpbmc6LjM3NXJlbSAuNzVyZW07Zm9udC1zaXplOjFyZW07bGluZS1oZWlnaHQ6MS41O2JvcmRlci1yYWRpdXM6LjI1cmVtO3Bvc2l0aW9uOnJlbGF0aXZlO2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjojMDA3YmZmO2ZvbnQtZmFtaWx5OkxhdG8sc2Fucy1zZXJpZiFpbXBvcnRhbnQ7Y3Vyc29yOnBvaW50ZXJ9YF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBOZ1J1dHRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHRleHQgPSAnTG9nIGluJztcbiAgQElucHV0KCkgYmFja2dyb3VuZENvbG9yID0gJyMwMDAnO1xuICBASW5wdXQoKSBjb2xvciA9ICcjRkZGJztcblxuICBAT3V0cHV0KCkgb25TdWNjZXNzID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIEBPdXRwdXQoKSBvbkxvYWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBvbkV4aXQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgbG9hZCgpIHtcbiAgICB0aGlzLnJ1dHRlclNlcnZpY2UubG9hZFJ1dHRlcigocHVibGljVG9rZW4pID0+IHtcbiAgICAgIHRoaXMub25TdWNjZXNzLmVtaXQocHVibGljVG9rZW4pXG4gICAgfSwgKCkgPT4ge1xuICAgICAgdGhpcy5vbkxvYWQuZW1pdCgpXG4gICAgfSwgKCkgPT4ge1xuICAgICAgdGhpcy5vbkV4aXQuZW1pdCgpXG4gICAgfSk7XG4gIH1cbiAgXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucnV0dGVyU2VydmljZS5zZXR1cCgpXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJ1dHRlclNlcnZpY2U6IE5nUnV0dGVyU2VydmljZSkge31cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdSdXR0ZXJDb21wb25lbnQgfSBmcm9tICcuL25nLXJ1dHRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmdSdXR0ZXJTZXJ2aWNlT3B0aW9ucywgTmdSdXR0ZXJTZXJ2aWNlIH0gZnJvbSAnLi9uZy1ydXR0ZXIuc2VydmljZSc7XG5cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBwcm92aWRlcnM6IFtcblx0TmdSdXR0ZXJTZXJ2aWNlXG5dLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBOZ1J1dHRlckNvbXBvbmVudFxuICBdLFxuICBleHBvcnRzOiBbXG5cdE5nUnV0dGVyQ29tcG9uZW50LFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE5nUnV0dGVyTW9kdWxlIHtcblxuICBzdGF0aWMgZm9yUm9vdCggb3B0aW9ucz86IE1vZHVsZU9wdGlvbnMgKSA6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuIFxuXHRcdHJldHVybih7XG5cdFx0XHRuZ01vZHVsZTogTmdSdXR0ZXJNb2R1bGUsXG5cdFx0XHRwcm92aWRlcnM6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHByb3ZpZGU6IEZPUl9ST09UX09QVElPTlNfVE9LRU4sXG5cdFx0XHRcdFx0dXNlVmFsdWU6IG9wdGlvbnNcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHByb3ZpZGU6IE5nUnV0dGVyU2VydmljZU9wdGlvbnMsXG5cdFx0XHRcdFx0dXNlRmFjdG9yeTogcHJvdmlkZU15U2VydmljZU9wdGlvbnMsXG5cdFx0XHRcdFx0ZGVwczogWyBGT1JfUk9PVF9PUFRJT05TX1RPS0VOIF1cblx0XHRcdFx0fVxuXHRcdFx0XVxuXHRcdH0pO1xuXHR9XG4gfVxuXG5cbi8vIEkgZGVmaW5lIHRoZSBzaGFwZSBvZiB0aGUgb3B0aW9uYWwgY29uZmlndXJhdGlvbiBkYXRhIHBhc3NlZCB0byB0aGUgZm9yUm9vdCgpIG1ldGhvZC5cbmV4cG9ydCBpbnRlcmZhY2UgTW9kdWxlT3B0aW9ucyB7XG4gIFBVQkxJQ19BUElfS0VZPzogc3RyaW5nO1xufVxuXG5leHBvcnQgdmFyIEZPUl9ST09UX09QVElPTlNfVE9LRU4gPSBuZXcgSW5qZWN0aW9uVG9rZW48TW9kdWxlT3B0aW9ucz4oIFwiZm9yUm9vdCgpIE15U2VydmljZSBjb25maWd1cmF0aW9uLlwiICk7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlTXlTZXJ2aWNlT3B0aW9ucyggb3B0aW9ucz86IE1vZHVsZU9wdGlvbnMgKSA6IE5nUnV0dGVyU2VydmljZU9wdGlvbnMge1xuIFxuXHR2YXIgc2VydmljZU9wdGlvbnMgPSBuZXcgTmdSdXR0ZXJTZXJ2aWNlT3B0aW9ucygpO1xuXHRpZiAoIG9wdGlvbnMgKSB7XG4gXG5cdFx0aWYgKCB0eXBlb2YoIG9wdGlvbnMuUFVCTElDX0FQSV9LRVkgKSA9PT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdHNlcnZpY2VPcHRpb25zLlBVQkxJQ19BUElfS0VZID0gb3B0aW9ucy5QVUJMSUNfQVBJX0tFWTtcblx0XHR9XG5cdH1cbiBcblx0cmV0dXJuKCBzZXJ2aWNlT3B0aW9ucyApO1xufSJdLCJuYW1lcyI6WyJJbmplY3RhYmxlIiwiZ2V0IiwiRXZlbnRFbWl0dGVyIiwiQ29tcG9uZW50IiwiSW5wdXQiLCJPdXRwdXQiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSIsIkluamVjdGlvblRva2VuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0E7O2tDQVNpQyxFQUFFOzs7b0JBSmxDQSxhQUFVLFNBQUM7d0JBQ1gsVUFBVSxFQUFFLE1BQU07cUJBQ2xCOzs7cUNBUkQ7OztRQTJDQyx5QkFBYSxPQUErQjt1QkF4QnRDLDhDQUE4QztZQXlCbkQsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7U0FDdkI7Ozs7Ozs7UUF4QkQs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