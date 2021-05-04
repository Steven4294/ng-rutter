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
function NgRutterEvent() { }
/** @type {?} */
NgRutterEvent.prototype.name;
/** @type {?|undefined} */
NgRutterEvent.prototype.data;
/** @enum {string} */
const NgRutterEventType = {
    SUCCESS: 'SUCCESS',
    LOAD: 'LOAD',
    EXIT: 'EXIt',
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctcnV0dGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1ydXR0ZXIvIiwic291cmNlcyI6WyJzcmMvYXBwL21vZHVsZXMvbmctcnV0dGVyL25nLXJ1dHRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDL0IsT0FBTyxFQUFZLFVBQVUsRUFBb0IsTUFBTSxNQUFNLENBQUM7Ozs7Ozs7Ozs7OztJQVc3RCxTQUFVLFNBQVM7SUFDbkIsTUFBTyxNQUFNO0lBQ2IsTUFBTyxNQUFNOzs7QUFNZCxNQUFNOzs4QkFDMkIsRUFBRTs7OztZQUpsQyxVQUFVLFNBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEI7Ozs7Ozs7QUFRRCxNQUFNOzs7O0lBb0RMLFlBQWEsT0FBK0I7bUJBL0N0Qyw4Q0FBOEM7UUFnRG5ELElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQXVCLEVBQUUsRUFBRTtZQUMvRCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQTtTQUN4QixDQUFDLENBQUE7S0FDRjs7OztJQWxERCxJQUFJO1FBQ0gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsSUFBRyxFQUFFLEdBQUcsRUFBRSxJQUFHLEVBQUUsR0FBRyxFQUFFLElBQUcsQ0FBQyxDQUFBO0tBQzdDOzs7Ozs7O0lBRUQsVUFBVSxDQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTTs7UUFFbkMsSUFBSSxjQUFjLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUNsQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjO1lBQ3RDLFNBQVMsRUFBRSxDQUFDLFdBQVcsRUFBRSxFQUFFO2dCQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQTtnQkFFN0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7b0JBRWxCLElBQUksRUFBRSxpQkFBaUIsQ0FBQyxPQUFPO29CQUMvQixJQUFJLEVBQUU7d0JBQ0wsS0FBSyxFQUFFLFdBQVc7cUJBQ2xCO2lCQUNELENBQUMsQ0FBQTtnQkFDRixTQUFTLENBQUMsV0FBVyxDQUFDLENBQUE7YUFDdEI7WUFDRCxNQUFNLEVBQUUsR0FBRyxFQUFFO2dCQUNaLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO29CQUNsQixJQUFJLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDNUIsQ0FBQyxDQUFBO2dCQUNGLE1BQU0sRUFBRSxDQUFBO2FBQ1I7WUFDRCxNQUFNLEVBQUUsR0FBRyxFQUFFO2dCQUNaLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO29CQUNsQixJQUFJLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDNUIsQ0FBQyxDQUFBO2dCQUNGLE1BQU0sRUFBRSxDQUFBO2FBQ1I7U0FDRCxDQUFDLENBQUE7UUFFRixjQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDdEI7Ozs7SUFFRCxLQUFLO1FBQ0osT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUN0QyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUU7Z0JBQ2xCLE9BQU8sRUFBRSxDQUFBO2FBQ1QsQ0FBQyxDQUFDO1NBQ0gsQ0FBQyxDQUFBO0tBQ0Y7Ozs7O0lBU0QsT0FBTyxDQUFDLFVBQXdCO1FBQy9CLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUN6Qjs7O1lBaEVELFVBQVUsU0FBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQjs7OztZQXFEc0Isc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0IHRoZSBjb3JlIGFuZ3VsYXIgc2VydmljZXMuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IGdldCB9IGZyb20gJ3NjcmlwdGpzJztcbmltcG9ydCB7IE9ic2VydmVyLCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24sIG9mIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IGZpbHRlciwgc2hhcmUgfSBmcm9tICdyeGpzL29wZXJhdG9ycydcblxuZGVjbGFyZSB2YXIgUnV0dGVyOiBhbnk7XG5cbmludGVyZmFjZSBOZ1J1dHRlckV2ZW50IHtcblx0bmFtZTogc3RyaW5nXG5cdGRhdGE/OiBhbnlcbn1cblxuZXhwb3J0IGVudW0gTmdSdXR0ZXJFdmVudFR5cGUge1xuXHRTVUNDRVNTID0gJ1NVQ0NFU1MnLFxuXHRMT0FEID0gJ0xPQUQnLFxuXHRFWElUID0gJ0VYSXQnLFxufVxuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46IFwicm9vdFwiXG59KVxuZXhwb3J0IGNsYXNzIE5nUnV0dGVyU2VydmljZU9wdGlvbnMge1xuXHRwdWJsaWMgUFVCTElDX0FQSV9LRVk6IHN0cmluZyA9ICcnO1xufVxuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46IFwicm9vdFwiXG59KVxuZXhwb3J0IGNsYXNzIE5nUnV0dGVyU2VydmljZSB7XG4gXG5cdHB1YmxpYyBvcHRpb25zOiBOZ1J1dHRlclNlcnZpY2VPcHRpb25zO1xuXHRwdWJsaWMgb2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxOZ1J1dHRlckV2ZW50Pjtcblx0cHVibGljIG9ic2VydmVyOiBPYnNlcnZlcjxhbnk+XG5cdHVybCA9ICdodHRwczovL3VucGtnLmNvbS9AcnV0dGVyL3J1dHRlci1saW5rQGxhdGVzdCc7XG5cblx0b3BlbigpIHtcblx0XHR0aGlzLmxvYWRSdXR0ZXIoKCkgPT4ge30sICgpID0+IHt9LCAoKSA9PiB7fSlcblx0fVxuXG5cdGxvYWRSdXR0ZXIob25TdWNjZXNzLCBvbkxvYWQsIG9uRXhpdCkge1xuXG5cdFx0dmFyIHJ1dHRlckluc3RhbmNlID0gUnV0dGVyLmNyZWF0ZSh7XG5cdFx0XHRwdWJsaWNLZXk6IHRoaXMub3B0aW9ucy5QVUJMSUNfQVBJX0tFWSxcblx0XHRcdG9uU3VjY2VzczogKHB1YmxpY1Rva2VuKSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGBpbm5lciBzdWNjZXNzICR7dGhpcy5vYnNlcnZlcn1gKVxuXG5cdFx0XHRcdHRoaXMub2JzZXJ2ZXIubmV4dCh7XG5cblx0XHRcdFx0XHRuYW1lOiBOZ1J1dHRlckV2ZW50VHlwZS5TVUNDRVNTLFxuXHRcdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHRcdHRva2VuOiBwdWJsaWNUb2tlblxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdFx0b25TdWNjZXNzKHB1YmxpY1Rva2VuKVxuXHRcdFx0fSxcblx0XHRcdG9uTG9hZDogKCkgPT4ge1xuXHRcdFx0XHR0aGlzLm9ic2VydmVyLm5leHQoe1xuXHRcdFx0XHRcdG5hbWU6IE5nUnV0dGVyRXZlbnRUeXBlLkxPQURcblx0XHRcdFx0fSlcblx0XHRcdFx0b25Mb2FkKClcblx0XHRcdH0sXG5cdFx0XHRvbkV4aXQ6ICgpID0+IHtcblx0XHRcdFx0dGhpcy5vYnNlcnZlci5uZXh0KHtcblx0XHRcdFx0XHRuYW1lOiBOZ1J1dHRlckV2ZW50VHlwZS5FWElUXG5cdFx0XHRcdH0pXG5cdFx0XHRcdG9uRXhpdCgpXG5cdFx0XHR9LFxuXHRcdH0pXG5cdFx0XHRcblx0XHRydXR0ZXJJbnN0YW5jZS5vcGVuKCk7XG5cdH1cblxuXHRzZXR1cCgpIHtcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0Z2V0KHRoaXMudXJsLCAoKSA9PiB7XG5cdFx0XHRcdHJlc29sdmUoKVxuXHRcdFx0fSk7XG5cdFx0fSlcblx0fVxuXG5cdGNvbnN0cnVjdG9yKCBvcHRpb25zOiBOZ1J1dHRlclNlcnZpY2VPcHRpb25zICkge1xuXHRcdHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cdFx0dGhpcy5vYnNlcnZhYmxlID0gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyOiBPYnNlcnZlcjxhbnk+KSA9PiB7XG5cdFx0XHR0aGlzLm9ic2VydmVyID0gb2JzZXJ2ZXJcblx0XHR9KVxuXHR9XG5cblx0ZGVzdHJveShzdWJzY3JpYmVyOiBTdWJzY3JpcHRpb24pIHtcblx0XHRzdWJzY3JpYmVyLnVuc3Vic2NyaWJlKCk7XG5cdH1cbn0iXX0=