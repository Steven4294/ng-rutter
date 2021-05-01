/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import { get } from 'scriptjs';
import * as i0 from "@angular/core";
var NgRutterServiceOptions = /** @class */ (function () {
    function NgRutterServiceOptions() {
        this.PUBLIC_API_KEY = '';
    }
    NgRutterServiceOptions.decorators = [
        { type: Injectable, args: [{
                    providedIn: "root"
                },] },
    ];
    /** @nocollapse */ NgRutterServiceOptions.ngInjectableDef = i0.defineInjectable({ factory: function NgRutterServiceOptions_Factory() { return new NgRutterServiceOptions(); }, token: NgRutterServiceOptions, providedIn: "root" });
    return NgRutterServiceOptions;
}());
export { NgRutterServiceOptions };
if (false) {
    /** @type {?} */
    NgRutterServiceOptions.prototype.PUBLIC_API_KEY;
}
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
    /** @nocollapse */ NgRutterService.ngInjectableDef = i0.defineInjectable({ factory: function NgRutterService_Factory() { return new NgRutterService(i0.inject(NgRutterServiceOptions)); }, token: NgRutterService, providedIn: "root" });
    return NgRutterService;
}());
export { NgRutterService };
if (false) {
    /** @type {?} */
    NgRutterService.prototype.options;
    /** @type {?} */
    NgRutterService.prototype.url;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctcnV0dGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1ydXR0ZXIvIiwic291cmNlcyI6WyJzcmMvYXBwL21vZHVsZXMvbmctcnV0dGVyL25nLXJ1dHRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxVQUFVLENBQUM7Ozs7OEJBUUUsRUFBRTs7O2dCQUpsQyxVQUFVLFNBQUM7b0JBQ1gsVUFBVSxFQUFFLE1BQU07aUJBQ2xCOzs7aUNBUkQ7O1NBU2Esc0JBQXNCOzs7Ozs7SUFrQ2xDLHlCQUFhLE9BQStCO21CQXhCdEMsOENBQThDO1FBeUJuRCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztLQUN2Qjs7Ozs7OztJQXhCRCxvQ0FBVTs7Ozs7O0lBQVYsVUFBVyxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU07O1FBRW5DLElBQUksY0FBYyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDbEMsU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYztZQUN0QyxTQUFTLEVBQUUsVUFBVSxXQUFXO2dCQUMvQixTQUFTLENBQUMsV0FBVyxDQUFDLENBQUE7YUFDdEI7WUFDRCxNQUFNLEVBQUUsTUFBTSxFQUFFO1lBQ2hCLE1BQU0sRUFBRSxNQUFNLEVBQUU7U0FDaEIsQ0FBQyxDQUFBO1FBRUYsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDO0tBQ3RCOzs7O0lBRUQsK0JBQUs7OztJQUFMO1FBQUEsaUJBTUM7UUFMQSxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDbEMsR0FBRyxDQUFDLEtBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQ2IsT0FBTyxFQUFFLENBQUE7YUFDVCxDQUFDLENBQUM7U0FDSCxDQUFDLENBQUE7S0FDRjs7Z0JBNUJELFVBQVUsU0FBQztvQkFDWCxVQUFVLEVBQUUsTUFBTTtpQkFDbEI7Ozs7Z0JBNEJzQixzQkFBc0I7OzswQkEzQzdDOztTQWdCYSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0IHRoZSBjb3JlIGFuZ3VsYXIgc2VydmljZXMuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IGdldCB9IGZyb20gJ3NjcmlwdGpzJztcblxuZGVjbGFyZSB2YXIgUnV0dGVyOiBhbnk7XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogXCJyb290XCJcbn0pXG5leHBvcnQgY2xhc3MgTmdSdXR0ZXJTZXJ2aWNlT3B0aW9ucyB7XG5cdHB1YmxpYyBQVUJMSUNfQVBJX0tFWTogc3RyaW5nID0gJyc7XG59XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogXCJyb290XCJcbn0pXG5leHBvcnQgY2xhc3MgTmdSdXR0ZXJTZXJ2aWNlIHtcbiBcblx0cHVibGljIG9wdGlvbnM6IE5nUnV0dGVyU2VydmljZU9wdGlvbnM7XG5cdHVybCA9ICdodHRwczovL3VucGtnLmNvbS9AcnV0dGVyL3J1dHRlci1saW5rQGxhdGVzdCc7XG5cblx0bG9hZFJ1dHRlcihvblN1Y2Nlc3MsIG9uTG9hZCwgb25FeGl0KSB7XG5cblx0XHR2YXIgcnV0dGVySW5zdGFuY2UgPSBSdXR0ZXIuY3JlYXRlKHtcblx0XHRcdHB1YmxpY0tleTogdGhpcy5vcHRpb25zLlBVQkxJQ19BUElfS0VZLFxuXHRcdFx0b25TdWNjZXNzOiBmdW5jdGlvbiAocHVibGljVG9rZW4pIHtcblx0XHRcdFx0b25TdWNjZXNzKHB1YmxpY1Rva2VuKVxuXHRcdFx0fSxcblx0XHRcdG9uTG9hZDogb25Mb2FkKCksXG5cdFx0XHRvbkV4aXQ6IG9uRXhpdCgpLFxuXHRcdH0pXG5cdFx0XHRcblx0XHRydXR0ZXJJbnN0YW5jZS5vcGVuKCk7XG5cdH1cblxuXHRzZXR1cCgpIHtcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0Z2V0KHRoaXMudXJsLCAoKSA9PiB7XG5cdFx0XHRcdHJlc29sdmUoKVxuXHRcdFx0fSk7XG5cdFx0fSlcblx0fVxuXHRcblx0Y29uc3RydWN0b3IoIG9wdGlvbnM6IE5nUnV0dGVyU2VydmljZU9wdGlvbnMgKSB7XG5cdFx0dGhpcy5vcHRpb25zID0gb3B0aW9ucztcblx0fVxufSJdfQ==