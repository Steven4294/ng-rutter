/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgRutterComponent } from './ng-rutter.component';
import { InjectionToken } from "@angular/core";
import { NgRutterServiceOptions, NgRutterService } from './ng-rutter.service';
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
export { NgRutterModule };
/**
 * @record
 */
export function ModuleOptions() { }
/** @type {?|undefined} */
ModuleOptions.prototype.PUBLIC_API_KEY;
/** @type {?} */
export var FOR_ROOT_OPTIONS_TOKEN = new InjectionToken("forRoot() MyService configuration.");
/**
 * @param {?=} options
 * @return {?}
 */
export function provideMyServiceOptions(options) {
    /** @type {?} */
    var serviceOptions = new NgRutterServiceOptions();
    if (options) {
        if (typeof (options.PUBLIC_API_KEY) === "string") {
            serviceOptions.PUBLIC_API_KEY = options.PUBLIC_API_KEY;
        }
    }
    return (serviceOptions);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctcnV0dGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXJ1dHRlci8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9uZy1ydXR0ZXIvbmctcnV0dGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7Ozs7OztJQW1CckUsc0JBQU87Ozs7SUFBZCxVQUFnQixPQUF1QjtRQUV2QyxPQUFNLENBQUM7WUFDTixRQUFRLEVBQUUsY0FBYztZQUN4QixTQUFTLEVBQUU7Z0JBQ1Y7b0JBQ0MsT0FBTyxFQUFFLHNCQUFzQjtvQkFDL0IsUUFBUSxFQUFFLE9BQU87aUJBQ2pCO2dCQUNEO29CQUNDLE9BQU8sRUFBRSxzQkFBc0I7b0JBQy9CLFVBQVUsRUFBRSx1QkFBdUI7b0JBQ25DLElBQUksRUFBRSxDQUFFLHNCQUFzQixDQUFFO2lCQUNoQztnQkFDRCxlQUFlO2FBQ2Y7U0FDRCxDQUFDLENBQUM7S0FDSDs7Z0JBakNELFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTtxQkFDYjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1osZUFBZTtxQkFDZjtvQkFDQyxZQUFZLEVBQUU7d0JBQ1osaUJBQWlCO3FCQUNsQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1YsaUJBQWlCO3FCQUNmO2lCQUNGOzt5QkFwQkQ7O1NBcUJhLGNBQWM7Ozs7Ozs7O0FBNEIzQixXQUFXLHNCQUFzQixHQUFHLElBQUksY0FBYyxDQUFpQixvQ0FBb0MsQ0FBRSxDQUFDOzs7OztBQUU5RyxNQUFNLGtDQUFtQyxPQUF1Qjs7SUFFL0QsSUFBSSxjQUFjLEdBQUcsSUFBSSxzQkFBc0IsRUFBRSxDQUFDO0lBQ2xELElBQUssT0FBTyxFQUFHO1FBRWQsSUFBSyxPQUFNLENBQUUsT0FBTyxDQUFDLGNBQWMsQ0FBRSxLQUFLLFFBQVEsRUFBRztZQUNwRCxjQUFjLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUM7U0FDdkQ7S0FDRDtJQUVELE9BQU0sQ0FBRSxjQUFjLENBQUUsQ0FBQztDQUN6QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdSdXR0ZXJDb21wb25lbnQgfSBmcm9tICcuL25nLXJ1dHRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmdSdXR0ZXJTZXJ2aWNlT3B0aW9ucywgTmdSdXR0ZXJTZXJ2aWNlIH0gZnJvbSAnLi9uZy1ydXR0ZXIuc2VydmljZSc7XG5cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBwcm92aWRlcnM6IFtcblx0TmdSdXR0ZXJTZXJ2aWNlXG5dLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBOZ1J1dHRlckNvbXBvbmVudFxuICBdLFxuICBleHBvcnRzOiBbXG5cdE5nUnV0dGVyQ29tcG9uZW50LFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE5nUnV0dGVyTW9kdWxlIHtcblxuICBzdGF0aWMgZm9yUm9vdCggb3B0aW9ucz86IE1vZHVsZU9wdGlvbnMgKSA6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuIFxuXHRcdHJldHVybih7XG5cdFx0XHRuZ01vZHVsZTogTmdSdXR0ZXJNb2R1bGUsXG5cdFx0XHRwcm92aWRlcnM6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHByb3ZpZGU6IEZPUl9ST09UX09QVElPTlNfVE9LRU4sXG5cdFx0XHRcdFx0dXNlVmFsdWU6IG9wdGlvbnNcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHByb3ZpZGU6IE5nUnV0dGVyU2VydmljZU9wdGlvbnMsXG5cdFx0XHRcdFx0dXNlRmFjdG9yeTogcHJvdmlkZU15U2VydmljZU9wdGlvbnMsXG5cdFx0XHRcdFx0ZGVwczogWyBGT1JfUk9PVF9PUFRJT05TX1RPS0VOIF1cblx0XHRcdFx0fSxcblx0XHRcdFx0TmdSdXR0ZXJTZXJ2aWNlXG5cdFx0XHRdXG5cdFx0fSk7XG5cdH1cbiB9XG5cblxuLy8gSSBkZWZpbmUgdGhlIHNoYXBlIG9mIHRoZSBvcHRpb25hbCBjb25maWd1cmF0aW9uIGRhdGEgcGFzc2VkIHRvIHRoZSBmb3JSb290KCkgbWV0aG9kLlxuZXhwb3J0IGludGVyZmFjZSBNb2R1bGVPcHRpb25zIHtcbiAgUFVCTElDX0FQSV9LRVk/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCB2YXIgRk9SX1JPT1RfT1BUSU9OU19UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxNb2R1bGVPcHRpb25zPiggXCJmb3JSb290KCkgTXlTZXJ2aWNlIGNvbmZpZ3VyYXRpb24uXCIgKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVNeVNlcnZpY2VPcHRpb25zKCBvcHRpb25zPzogTW9kdWxlT3B0aW9ucyApIDogTmdSdXR0ZXJTZXJ2aWNlT3B0aW9ucyB7XG4gXG5cdHZhciBzZXJ2aWNlT3B0aW9ucyA9IG5ldyBOZ1J1dHRlclNlcnZpY2VPcHRpb25zKCk7XG5cdGlmICggb3B0aW9ucyApIHtcbiBcblx0XHRpZiAoIHR5cGVvZiggb3B0aW9ucy5QVUJMSUNfQVBJX0tFWSApID09PSBcInN0cmluZ1wiICkge1xuXHRcdFx0c2VydmljZU9wdGlvbnMuUFVCTElDX0FQSV9LRVkgPSBvcHRpb25zLlBVQkxJQ19BUElfS0VZO1xuXHRcdH1cblx0fVxuIFxuXHRyZXR1cm4oIHNlcnZpY2VPcHRpb25zICk7XG59Il19