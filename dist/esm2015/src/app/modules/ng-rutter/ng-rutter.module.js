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
                },
                NgRutterService
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctcnV0dGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXJ1dHRlci8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9uZy1ydXR0ZXIvbmctcnV0dGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBaUI5RSxNQUFNOzs7OztJQUVKLE1BQU0sQ0FBQyxPQUFPLENBQUUsT0FBdUI7UUFFdkMsT0FBTSxDQUFDO1lBQ04sUUFBUSxFQUFFLGNBQWM7WUFDeEIsU0FBUyxFQUFFO2dCQUNWO29CQUNDLE9BQU8sRUFBRSxzQkFBc0I7b0JBQy9CLFFBQVEsRUFBRSxPQUFPO2lCQUNqQjtnQkFDRDtvQkFDQyxPQUFPLEVBQUUsc0JBQXNCO29CQUMvQixVQUFVLEVBQUUsdUJBQXVCO29CQUNuQyxJQUFJLEVBQUUsQ0FBRSxzQkFBc0IsQ0FBRTtpQkFDaEM7Z0JBQ0QsZUFBZTthQUNmO1NBQ0QsQ0FBQyxDQUFDO0tBQ0g7OztZQWpDRCxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7aUJBQ2I7Z0JBQ0QsU0FBUyxFQUFFO29CQUNaLGVBQWU7aUJBQ2Y7Z0JBQ0MsWUFBWSxFQUFFO29CQUNaLGlCQUFpQjtpQkFDbEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNWLGlCQUFpQjtpQkFDZjthQUNGOzs7Ozs7Ozs7QUE2QkQsV0FBVyxzQkFBc0IsR0FBRyxJQUFJLGNBQWMsQ0FBaUIsb0NBQW9DLENBQUUsQ0FBQzs7Ozs7QUFFOUcsTUFBTSxrQ0FBbUMsT0FBdUI7O0lBRS9ELElBQUksY0FBYyxHQUFHLElBQUksc0JBQXNCLEVBQUUsQ0FBQztJQUNsRCxJQUFLLE9BQU8sRUFBRztRQUVkLElBQUssT0FBTSxDQUFFLE9BQU8sQ0FBQyxjQUFjLENBQUUsS0FBSyxRQUFRLEVBQUc7WUFDcEQsY0FBYyxDQUFDLGNBQWMsR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDO1NBQ3ZEO0tBQ0Q7SUFFRCxPQUFNLENBQUUsY0FBYyxDQUFFLENBQUM7Q0FDekIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nUnV0dGVyQ29tcG9uZW50IH0gZnJvbSAnLi9uZy1ydXR0ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5nUnV0dGVyU2VydmljZU9wdGlvbnMsIE5nUnV0dGVyU2VydmljZSB9IGZyb20gJy4vbmctcnV0dGVyLnNlcnZpY2UnO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG5cdE5nUnV0dGVyU2VydmljZVxuXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTmdSdXR0ZXJDb21wb25lbnRcbiAgXSxcbiAgZXhwb3J0czogW1xuXHROZ1J1dHRlckNvbXBvbmVudCxcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ1J1dHRlck1vZHVsZSB7XG5cbiAgc3RhdGljIGZvclJvb3QoIG9wdGlvbnM/OiBNb2R1bGVPcHRpb25zICkgOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiBcblx0XHRyZXR1cm4oe1xuXHRcdFx0bmdNb2R1bGU6IE5nUnV0dGVyTW9kdWxlLFxuXHRcdFx0cHJvdmlkZXJzOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRwcm92aWRlOiBGT1JfUk9PVF9PUFRJT05TX1RPS0VOLFxuXHRcdFx0XHRcdHVzZVZhbHVlOiBvcHRpb25zXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRwcm92aWRlOiBOZ1J1dHRlclNlcnZpY2VPcHRpb25zLFxuXHRcdFx0XHRcdHVzZUZhY3Rvcnk6IHByb3ZpZGVNeVNlcnZpY2VPcHRpb25zLFxuXHRcdFx0XHRcdGRlcHM6IFsgRk9SX1JPT1RfT1BUSU9OU19UT0tFTiBdXG5cdFx0XHRcdH0sXG5cdFx0XHRcdE5nUnV0dGVyU2VydmljZVxuXHRcdFx0XVxuXHRcdH0pO1xuXHR9XG4gfVxuXG5cbi8vIEkgZGVmaW5lIHRoZSBzaGFwZSBvZiB0aGUgb3B0aW9uYWwgY29uZmlndXJhdGlvbiBkYXRhIHBhc3NlZCB0byB0aGUgZm9yUm9vdCgpIG1ldGhvZC5cbmV4cG9ydCBpbnRlcmZhY2UgTW9kdWxlT3B0aW9ucyB7XG4gIFBVQkxJQ19BUElfS0VZPzogc3RyaW5nO1xufVxuXG5leHBvcnQgdmFyIEZPUl9ST09UX09QVElPTlNfVE9LRU4gPSBuZXcgSW5qZWN0aW9uVG9rZW48TW9kdWxlT3B0aW9ucz4oIFwiZm9yUm9vdCgpIE15U2VydmljZSBjb25maWd1cmF0aW9uLlwiICk7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlTXlTZXJ2aWNlT3B0aW9ucyggb3B0aW9ucz86IE1vZHVsZU9wdGlvbnMgKSA6IE5nUnV0dGVyU2VydmljZU9wdGlvbnMge1xuIFxuXHR2YXIgc2VydmljZU9wdGlvbnMgPSBuZXcgTmdSdXR0ZXJTZXJ2aWNlT3B0aW9ucygpO1xuXHRpZiAoIG9wdGlvbnMgKSB7XG4gXG5cdFx0aWYgKCB0eXBlb2YoIG9wdGlvbnMuUFVCTElDX0FQSV9LRVkgKSA9PT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdHNlcnZpY2VPcHRpb25zLlBVQkxJQ19BUElfS0VZID0gb3B0aW9ucy5QVUJMSUNfQVBJX0tFWTtcblx0XHR9XG5cdH1cbiBcblx0cmV0dXJuKCBzZXJ2aWNlT3B0aW9ucyApO1xufSJdfQ==