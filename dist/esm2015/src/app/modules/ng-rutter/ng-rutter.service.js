/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import { get } from 'scriptjs';
import * as i0 from "@angular/core";
export class NgRutterServiceOptions {
    constructor() {
        this.PUBLIC_API_KEY = '';
    }
}
NgRutterServiceOptions.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] },
];
/** @nocollapse */ NgRutterServiceOptions.ngInjectableDef = i0.defineInjectable({ factory: function NgRutterServiceOptions_Factory() { return new NgRutterServiceOptions(); }, token: NgRutterServiceOptions, providedIn: "root" });
if (false) {
    /** @type {?} */
    NgRutterServiceOptions.prototype.PUBLIC_API_KEY;
}
export class NgRutterService {
    /**
     * @param {?} options
     */
    constructor(options) {
        this.url = 'https://unpkg.com/@rutter/rutter-link@latest';
        this.options = options;
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
            onSuccess: function (publicToken) {
                onSuccess(publicToken);
            },
            onLoad: onLoad(),
            onExit: onExit(),
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
/** @nocollapse */ NgRutterService.ngInjectableDef = i0.defineInjectable({ factory: function NgRutterService_Factory() { return new NgRutterService(i0.inject(NgRutterServiceOptions)); }, token: NgRutterService, providedIn: "root" });
if (false) {
    /** @type {?} */
    NgRutterService.prototype.options;
    /** @type {?} */
    NgRutterService.prototype.url;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctcnV0dGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1ydXR0ZXIvIiwic291cmNlcyI6WyJzcmMvYXBwL21vZHVsZXMvbmctcnV0dGVyL25nLXJ1dHRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxVQUFVLENBQUM7O0FBTy9CLE1BQU07OzhCQUMyQixFQUFFOzs7O1lBSmxDLFVBQVUsU0FBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQjs7Ozs7OztBQVFELE1BQU07Ozs7SUEyQkwsWUFBYSxPQUErQjttQkF4QnRDLDhDQUE4QztRQXlCbkQsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7S0FDdkI7Ozs7Ozs7SUF4QkQsVUFBVSxDQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTTs7UUFFbkMsSUFBSSxjQUFjLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUNsQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjO1lBQ3RDLFNBQVMsRUFBRSxVQUFVLFdBQVc7Z0JBQy9CLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQTthQUN0QjtZQUNELE1BQU0sRUFBRSxNQUFNLEVBQUU7WUFDaEIsTUFBTSxFQUFFLE1BQU0sRUFBRTtTQUNoQixDQUFDLENBQUE7UUFFRixjQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDdEI7Ozs7SUFFRCxLQUFLO1FBQ0osT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUN0QyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUU7Z0JBQ2xCLE9BQU8sRUFBRSxDQUFBO2FBQ1QsQ0FBQyxDQUFDO1NBQ0gsQ0FBQyxDQUFBO0tBQ0Y7OztZQTVCRCxVQUFVLFNBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEI7Ozs7WUE0QnNCLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydCB0aGUgY29yZSBhbmd1bGFyIHNlcnZpY2VzLlxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBnZXQgfSBmcm9tICdzY3JpcHRqcyc7XG5cbmRlY2xhcmUgdmFyIFJ1dHRlcjogYW55O1xuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46IFwicm9vdFwiXG59KVxuZXhwb3J0IGNsYXNzIE5nUnV0dGVyU2VydmljZU9wdGlvbnMge1xuXHRwdWJsaWMgUFVCTElDX0FQSV9LRVk6IHN0cmluZyA9ICcnO1xufVxuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46IFwicm9vdFwiXG59KVxuZXhwb3J0IGNsYXNzIE5nUnV0dGVyU2VydmljZSB7XG4gXG5cdHB1YmxpYyBvcHRpb25zOiBOZ1J1dHRlclNlcnZpY2VPcHRpb25zO1xuXHR1cmwgPSAnaHR0cHM6Ly91bnBrZy5jb20vQHJ1dHRlci9ydXR0ZXItbGlua0BsYXRlc3QnO1xuXG5cdGxvYWRSdXR0ZXIob25TdWNjZXNzLCBvbkxvYWQsIG9uRXhpdCkge1xuXG5cdFx0dmFyIHJ1dHRlckluc3RhbmNlID0gUnV0dGVyLmNyZWF0ZSh7XG5cdFx0XHRwdWJsaWNLZXk6IHRoaXMub3B0aW9ucy5QVUJMSUNfQVBJX0tFWSxcblx0XHRcdG9uU3VjY2VzczogZnVuY3Rpb24gKHB1YmxpY1Rva2VuKSB7XG5cdFx0XHRcdG9uU3VjY2VzcyhwdWJsaWNUb2tlbilcblx0XHRcdH0sXG5cdFx0XHRvbkxvYWQ6IG9uTG9hZCgpLFxuXHRcdFx0b25FeGl0OiBvbkV4aXQoKSxcblx0XHR9KVxuXHRcdFx0XG5cdFx0cnV0dGVySW5zdGFuY2Uub3BlbigpO1xuXHR9XG5cblx0c2V0dXAoKSB7XG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdGdldCh0aGlzLnVybCwgKCkgPT4ge1xuXHRcdFx0XHRyZXNvbHZlKClcblx0XHRcdH0pO1xuXHRcdH0pXG5cdH1cblx0XG5cdGNvbnN0cnVjdG9yKCBvcHRpb25zOiBOZ1J1dHRlclNlcnZpY2VPcHRpb25zICkge1xuXHRcdHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cdH1cbn0iXX0=