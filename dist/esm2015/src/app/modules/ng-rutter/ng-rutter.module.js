/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgRutterComponent } from './ng-rutter.component';
import { InjectionToken } from "@angular/core";
import { NgRutterServiceOptions, NgRutterService } from './ng-rutter.service';
export class NgRutterModule {
    /**
     * @param {?=} options
     * @return {?}
     */
    static forRoot(options) {
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
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctcnV0dGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXJ1dHRlci8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9uZy1ydXR0ZXIvbmctcnV0dGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBaUI5RSxNQUFNOzs7OztJQUVKLE1BQU0sQ0FBQyxPQUFPLENBQUUsT0FBdUI7UUFFdkMsT0FBTSxDQUFDO1lBQ04sUUFBUSxFQUFFLGNBQWM7WUFDeEIsU0FBUyxFQUFFO2dCQUNWO29CQUNDLE9BQU8sRUFBRSxzQkFBc0I7b0JBQy9CLFFBQVEsRUFBRSxPQUFPO2lCQUNqQjtnQkFDRDtvQkFDQyxPQUFPLEVBQUUsc0JBQXNCO29CQUMvQixVQUFVLEVBQUUsdUJBQXVCO29CQUNuQyxJQUFJLEVBQUUsQ0FBRSxzQkFBc0IsQ0FBRTtpQkFDaEM7YUFDRDtTQUNELENBQUMsQ0FBQztLQUNIOzs7WUFoQ0QsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO2lCQUNiO2dCQUNELFNBQVMsRUFBRTtvQkFDWixlQUFlO2lCQUNmO2dCQUNDLFlBQVksRUFBRTtvQkFDWixpQkFBaUI7aUJBQ2xCO2dCQUNELE9BQU8sRUFBRTtvQkFDVixpQkFBaUI7aUJBQ2Y7YUFDRjs7Ozs7Ozs7O0FBNEJELFdBQVcsc0JBQXNCLEdBQUcsSUFBSSxjQUFjLENBQWlCLG9DQUFvQyxDQUFFLENBQUM7Ozs7O0FBRTlHLE1BQU0sa0NBQW1DLE9BQXVCOztJQUUvRCxJQUFJLGNBQWMsR0FBRyxJQUFJLHNCQUFzQixFQUFFLENBQUM7SUFDbEQsSUFBSyxPQUFPLEVBQUc7UUFFZCxJQUFLLE9BQU0sQ0FBRSxPQUFPLENBQUMsY0FBYyxDQUFFLEtBQUssUUFBUSxFQUFHO1lBQ3BELGNBQWMsQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQztTQUN2RDtLQUNEO0lBRUQsT0FBTSxDQUFFLGNBQWMsQ0FBRSxDQUFDO0NBQ3pCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ1J1dHRlckNvbXBvbmVudCB9IGZyb20gJy4vbmctcnV0dGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOZ1J1dHRlclNlcnZpY2VPcHRpb25zLCBOZ1J1dHRlclNlcnZpY2UgfSBmcm9tICcuL25nLXJ1dHRlci5zZXJ2aWNlJztcblxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuXHROZ1J1dHRlclNlcnZpY2Vcbl0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE5nUnV0dGVyQ29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6IFtcblx0TmdSdXR0ZXJDb21wb25lbnQsXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTmdSdXR0ZXJNb2R1bGUge1xuXG4gIHN0YXRpYyBmb3JSb290KCBvcHRpb25zPzogTW9kdWxlT3B0aW9ucyApIDogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gXG5cdFx0cmV0dXJuKHtcblx0XHRcdG5nTW9kdWxlOiBOZ1J1dHRlck1vZHVsZSxcblx0XHRcdHByb3ZpZGVyczogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0cHJvdmlkZTogRk9SX1JPT1RfT1BUSU9OU19UT0tFTixcblx0XHRcdFx0XHR1c2VWYWx1ZTogb3B0aW9uc1xuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0cHJvdmlkZTogTmdSdXR0ZXJTZXJ2aWNlT3B0aW9ucyxcblx0XHRcdFx0XHR1c2VGYWN0b3J5OiBwcm92aWRlTXlTZXJ2aWNlT3B0aW9ucyxcblx0XHRcdFx0XHRkZXBzOiBbIEZPUl9ST09UX09QVElPTlNfVE9LRU4gXVxuXHRcdFx0XHR9XG5cdFx0XHRdXG5cdFx0fSk7XG5cdH1cbiB9XG5cblxuLy8gSSBkZWZpbmUgdGhlIHNoYXBlIG9mIHRoZSBvcHRpb25hbCBjb25maWd1cmF0aW9uIGRhdGEgcGFzc2VkIHRvIHRoZSBmb3JSb290KCkgbWV0aG9kLlxuZXhwb3J0IGludGVyZmFjZSBNb2R1bGVPcHRpb25zIHtcbiAgUFVCTElDX0FQSV9LRVk/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCB2YXIgRk9SX1JPT1RfT1BUSU9OU19UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxNb2R1bGVPcHRpb25zPiggXCJmb3JSb290KCkgTXlTZXJ2aWNlIGNvbmZpZ3VyYXRpb24uXCIgKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVNeVNlcnZpY2VPcHRpb25zKCBvcHRpb25zPzogTW9kdWxlT3B0aW9ucyApIDogTmdSdXR0ZXJTZXJ2aWNlT3B0aW9ucyB7XG4gXG5cdHZhciBzZXJ2aWNlT3B0aW9ucyA9IG5ldyBOZ1J1dHRlclNlcnZpY2VPcHRpb25zKCk7XG5cdGlmICggb3B0aW9ucyApIHtcbiBcblx0XHRpZiAoIHR5cGVvZiggb3B0aW9ucy5QVUJMSUNfQVBJX0tFWSApID09PSBcInN0cmluZ1wiICkge1xuXHRcdFx0c2VydmljZU9wdGlvbnMuUFVCTElDX0FQSV9LRVkgPSBvcHRpb25zLlBVQkxJQ19BUElfS0VZO1xuXHRcdH1cblx0fVxuIFxuXHRyZXR1cm4oIHNlcnZpY2VPcHRpb25zICk7XG59Il19