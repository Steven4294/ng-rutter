/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import { get } from 'scriptjs';
import { Observable } from "rxjs";
import * as i0 from "@angular/core";
/**
 * @record
 */
export function NgRutterEvent() { }
/** @type {?} */
NgRutterEvent.prototype.name;
/** @type {?|undefined} */
NgRutterEvent.prototype.data;
/** @enum {string} */
const NgRutterEventType = {
    SUCCESS: 'SUCCESS',
    LOAD: 'LOAD',
    EXIT: 'EXIT',
};
export { NgRutterEventType };
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
/** @nocollapse */ NgRutterService.ngInjectableDef = i0.defineInjectable({ factory: function NgRutterService_Factory() { return new NgRutterService(i0.inject(NgRutterServiceOptions)); }, token: NgRutterService, providedIn: "root" });
if (false) {
    /** @type {?} */
    NgRutterService.prototype.options;
    /** @type {?} */
    NgRutterService.prototype.observable;
    /** @type {?} */
    NgRutterService.prototype.observer;
    /** @type {?} */
    NgRutterService.prototype.url;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctcnV0dGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1ydXR0ZXIvIiwic291cmNlcyI6WyJzcmMvYXBwL21vZHVsZXMvbmctcnV0dGVyL25nLXJ1dHRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDL0IsT0FBTyxFQUFZLFVBQVUsRUFBb0IsTUFBTSxNQUFNLENBQUM7Ozs7Ozs7Ozs7OztJQVc3RCxTQUFVLFNBQVM7SUFDbkIsTUFBTyxNQUFNO0lBQ2IsTUFBTyxNQUFNOzs7QUFNZCxNQUFNOzs4QkFDMkIsRUFBRTs7OztZQUpsQyxVQUFVLFNBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEI7Ozs7Ozs7QUFRRCxNQUFNOzs7O0lBb0RMLFlBQWEsT0FBK0I7bUJBL0N0Qyw4Q0FBOEM7UUFnRG5ELElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQXVCLEVBQUUsRUFBRTtZQUMvRCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQTtTQUN4QixDQUFDLENBQUE7UUFFRixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUE7S0FDWjs7OztJQXBERCxJQUFJO1FBQ0gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsSUFBRyxFQUFFLEdBQUcsRUFBRSxJQUFHLEVBQUUsR0FBRyxFQUFFLElBQUcsQ0FBQyxDQUFBO0tBQzdDOzs7Ozs7O0lBRUQsVUFBVSxDQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTTs7UUFFbkMsSUFBSSxjQUFjLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUNsQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjO1lBQ3RDLFNBQVMsRUFBRSxDQUFDLFdBQVcsRUFBRSxFQUFFO2dCQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQTtnQkFFN0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7b0JBRWxCLElBQUksRUFBRSxpQkFBaUIsQ0FBQyxPQUFPO29CQUMvQixJQUFJLEVBQUU7d0JBQ0wsS0FBSyxFQUFFLFdBQVc7cUJBQ2xCO2lCQUNELENBQUMsQ0FBQTtnQkFDRixTQUFTLENBQUMsV0FBVyxDQUFDLENBQUE7YUFDdEI7WUFDRCxNQUFNLEVBQUUsR0FBRyxFQUFFO2dCQUNaLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO29CQUNsQixJQUFJLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDNUIsQ0FBQyxDQUFBO2dCQUNGLE1BQU0sRUFBRSxDQUFBO2FBQ1I7WUFDRCxNQUFNLEVBQUUsR0FBRyxFQUFFO2dCQUNaLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO29CQUNsQixJQUFJLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDNUIsQ0FBQyxDQUFBO2dCQUNGLE1BQU0sRUFBRSxDQUFBO2FBQ1I7U0FDRCxDQUFDLENBQUE7UUFFRixjQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDdEI7Ozs7SUFFRCxLQUFLO1FBQ0osT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUN0QyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUU7Z0JBQ2xCLE9BQU8sRUFBRSxDQUFBO2FBQ1QsQ0FBQyxDQUFDO1NBQ0gsQ0FBQyxDQUFBO0tBQ0Y7Ozs7O0lBV0QsT0FBTyxDQUFDLFVBQXdCO1FBQy9CLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUN6Qjs7O1lBbEVELFVBQVUsU0FBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQjs7OztZQXFEc0Isc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0IHRoZSBjb3JlIGFuZ3VsYXIgc2VydmljZXMuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IGdldCB9IGZyb20gJ3NjcmlwdGpzJztcbmltcG9ydCB7IE9ic2VydmVyLCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24sIG9mIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IGZpbHRlciwgc2hhcmUgfSBmcm9tICdyeGpzL29wZXJhdG9ycydcblxuZGVjbGFyZSB2YXIgUnV0dGVyOiBhbnk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmdSdXR0ZXJFdmVudCB7XG5cdG5hbWU6IHN0cmluZ1xuXHRkYXRhPzogYW55XG59XG5cbmV4cG9ydCBlbnVtIE5nUnV0dGVyRXZlbnRUeXBlIHtcblx0U1VDQ0VTUyA9ICdTVUNDRVNTJyxcblx0TE9BRCA9ICdMT0FEJyxcblx0RVhJVCA9ICdFWElUJyxcbn1cblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiBcInJvb3RcIlxufSlcbmV4cG9ydCBjbGFzcyBOZ1J1dHRlclNlcnZpY2VPcHRpb25zIHtcblx0cHVibGljIFBVQkxJQ19BUElfS0VZOiBzdHJpbmcgPSAnJztcbn1cblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiBcInJvb3RcIlxufSlcbmV4cG9ydCBjbGFzcyBOZ1J1dHRlclNlcnZpY2Uge1xuIFxuXHRwdWJsaWMgb3B0aW9uczogTmdSdXR0ZXJTZXJ2aWNlT3B0aW9ucztcblx0cHVibGljIG9ic2VydmFibGU6IE9ic2VydmFibGU8TmdSdXR0ZXJFdmVudD47XG5cdHB1YmxpYyBvYnNlcnZlcjogT2JzZXJ2ZXI8YW55PlxuXHR1cmwgPSAnaHR0cHM6Ly91bnBrZy5jb20vQHJ1dHRlci9ydXR0ZXItbGlua0BsYXRlc3QnO1xuXG5cdG9wZW4oKSB7XG5cdFx0dGhpcy5sb2FkUnV0dGVyKCgpID0+IHt9LCAoKSA9PiB7fSwgKCkgPT4ge30pXG5cdH1cblxuXHRsb2FkUnV0dGVyKG9uU3VjY2Vzcywgb25Mb2FkLCBvbkV4aXQpIHtcblxuXHRcdHZhciBydXR0ZXJJbnN0YW5jZSA9IFJ1dHRlci5jcmVhdGUoe1xuXHRcdFx0cHVibGljS2V5OiB0aGlzLm9wdGlvbnMuUFVCTElDX0FQSV9LRVksXG5cdFx0XHRvblN1Y2Nlc3M6IChwdWJsaWNUb2tlbikgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhgaW5uZXIgc3VjY2VzcyAke3RoaXMub2JzZXJ2ZXJ9YClcblxuXHRcdFx0XHR0aGlzLm9ic2VydmVyLm5leHQoe1xuXG5cdFx0XHRcdFx0bmFtZTogTmdSdXR0ZXJFdmVudFR5cGUuU1VDQ0VTUyxcblx0XHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0XHR0b2tlbjogcHVibGljVG9rZW5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHRcdG9uU3VjY2VzcyhwdWJsaWNUb2tlbilcblx0XHRcdH0sXG5cdFx0XHRvbkxvYWQ6ICgpID0+IHtcblx0XHRcdFx0dGhpcy5vYnNlcnZlci5uZXh0KHtcblx0XHRcdFx0XHRuYW1lOiBOZ1J1dHRlckV2ZW50VHlwZS5MT0FEXG5cdFx0XHRcdH0pXG5cdFx0XHRcdG9uTG9hZCgpXG5cdFx0XHR9LFxuXHRcdFx0b25FeGl0OiAoKSA9PiB7XG5cdFx0XHRcdHRoaXMub2JzZXJ2ZXIubmV4dCh7XG5cdFx0XHRcdFx0bmFtZTogTmdSdXR0ZXJFdmVudFR5cGUuRVhJVFxuXHRcdFx0XHR9KVxuXHRcdFx0XHRvbkV4aXQoKVxuXHRcdFx0fSxcblx0XHR9KVxuXHRcdFx0XG5cdFx0cnV0dGVySW5zdGFuY2Uub3BlbigpO1xuXHR9XG5cblx0c2V0dXAoKSB7XG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdGdldCh0aGlzLnVybCwgKCkgPT4ge1xuXHRcdFx0XHRyZXNvbHZlKClcblx0XHRcdH0pO1xuXHRcdH0pXG5cdH1cblxuXHRjb25zdHJ1Y3Rvciggb3B0aW9uczogTmdSdXR0ZXJTZXJ2aWNlT3B0aW9ucyApIHtcblx0XHR0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXHRcdHRoaXMub2JzZXJ2YWJsZSA9IE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcjogT2JzZXJ2ZXI8YW55PikgPT4ge1xuXHRcdFx0dGhpcy5vYnNlcnZlciA9IG9ic2VydmVyXG5cdFx0fSlcblxuXHRcdHRoaXMuc2V0dXAoKVxuXHR9XG5cblx0ZGVzdHJveShzdWJzY3JpYmVyOiBTdWJzY3JpcHRpb24pIHtcblx0XHRzdWJzY3JpYmVyLnVuc3Vic2NyaWJlKCk7XG5cdH1cbn0iXX0=