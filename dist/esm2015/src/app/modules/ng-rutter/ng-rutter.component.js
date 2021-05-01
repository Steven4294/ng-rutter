/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { NgRutterService } from './ng-rutter.service';
export class NgRutterComponent {
    /**
     * @param {?} rutterService
     */
    constructor(rutterService) {
        this.rutterService = rutterService;
        this.text = 'Log in';
        this.backgroundColor = '#000';
        this.color = '#FFF';
        this.onSuccess = new EventEmitter();
        this.onLoad = new EventEmitter();
        this.onExit = new EventEmitter();
    }
    /**
     * @return {?}
     */
    load() {
        this.rutterService.loadRutter((publicToken) => {
            this.onSuccess.emit(publicToken);
        }, () => {
            this.onLoad.emit();
        }, () => {
            this.onExit.emit();
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.rutterService.setup();
    }
}
NgRutterComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-rutter',
                template: `<div class="btn" (click)="load()" 
[style.background-color]="backgroundColor"
[style.color]="color"

> {{ text }} </div>`,
                styles: [`.btn{display:inline-block;font-weight:400;text-align:center;white-space:nowrap;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid transparent;padding:.375rem .75rem;font-size:1rem;line-height:1.5;border-radius:.25rem;position:relative;color:#fff;background-color:#007bff;font-family:Lato,sans-serif!important;cursor:pointer}`]
            },] },
];
/** @nocollapse */
NgRutterComponent.ctorParameters = () => [
    { type: NgRutterService }
];
NgRutterComponent.propDecorators = {
    text: [{ type: Input }],
    backgroundColor: [{ type: Input }],
    color: [{ type: Input }],
    onSuccess: [{ type: Output }],
    onLoad: [{ type: Output }],
    onExit: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    NgRutterComponent.prototype.text;
    /** @type {?} */
    NgRutterComponent.prototype.backgroundColor;
    /** @type {?} */
    NgRutterComponent.prototype.color;
    /** @type {?} */
    NgRutterComponent.prototype.onSuccess;
    /** @type {?} */
    NgRutterComponent.prototype.onLoad;
    /** @type {?} */
    NgRutterComponent.prototype.onExit;
    /** @type {?} */
    NgRutterComponent.prototype.rutterService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctcnV0dGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXJ1dHRlci8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9uZy1ydXR0ZXIvbmctcnV0dGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFZdEQsTUFBTTs7OztJQXVCSixZQUFvQixhQUE4QjtRQUE5QixrQkFBYSxHQUFiLGFBQWEsQ0FBaUI7b0JBdEJsQyxRQUFROytCQUNHLE1BQU07cUJBQ2hCLE1BQU07eUJBRUQsSUFBSSxZQUFZLEVBQVU7c0JBQzdCLElBQUksWUFBWSxFQUFFO3NCQUNsQixJQUFJLFlBQVksRUFBRTtLQWdCaUI7Ozs7SUFkdEQsSUFBSTtRQUNGLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQUU7WUFDNUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7U0FDakMsRUFBRSxHQUFHLEVBQUU7WUFDTixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFBO1NBQ25CLEVBQUUsR0FBRyxFQUFFO1lBQ04sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQTtTQUNuQixDQUFDLENBQUM7S0FDSjs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFBO0tBQzNCOzs7WUEvQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixRQUFRLEVBQUU7Ozs7b0JBSVE7Z0JBQ2xCLE1BQU0sRUFBRSxDQUFDLCtZQUErWSxDQUFDO2FBQzFaOzs7O1lBVlEsZUFBZTs7O21CQWFyQixLQUFLOzhCQUNMLEtBQUs7b0JBQ0wsS0FBSzt3QkFFTCxNQUFNO3FCQUNOLE1BQU07cUJBQ04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nUnV0dGVyU2VydmljZSB9IGZyb20gJy4vbmctcnV0dGVyLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZy1ydXR0ZXInLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJidG5cIiAoY2xpY2spPVwibG9hZCgpXCIgXG5bc3R5bGUuYmFja2dyb3VuZC1jb2xvcl09XCJiYWNrZ3JvdW5kQ29sb3JcIlxuW3N0eWxlLmNvbG9yXT1cImNvbG9yXCJcblxuPiB7eyB0ZXh0IH19IDwvZGl2PmAsXG4gIHN0eWxlczogW2AuYnRue2Rpc3BsYXk6aW5saW5lLWJsb2NrO2ZvbnQtd2VpZ2h0OjQwMDt0ZXh0LWFsaWduOmNlbnRlcjt3aGl0ZS1zcGFjZTpub3dyYXA7dmVydGljYWwtYWxpZ246bWlkZGxlOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTtib3JkZXI6MXB4IHNvbGlkIHRyYW5zcGFyZW50O3BhZGRpbmc6LjM3NXJlbSAuNzVyZW07Zm9udC1zaXplOjFyZW07bGluZS1oZWlnaHQ6MS41O2JvcmRlci1yYWRpdXM6LjI1cmVtO3Bvc2l0aW9uOnJlbGF0aXZlO2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjojMDA3YmZmO2ZvbnQtZmFtaWx5OkxhdG8sc2Fucy1zZXJpZiFpbXBvcnRhbnQ7Y3Vyc29yOnBvaW50ZXJ9YF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBOZ1J1dHRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHRleHQgPSAnTG9nIGluJztcbiAgQElucHV0KCkgYmFja2dyb3VuZENvbG9yID0gJyMwMDAnO1xuICBASW5wdXQoKSBjb2xvciA9ICcjRkZGJztcblxuICBAT3V0cHV0KCkgb25TdWNjZXNzID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIEBPdXRwdXQoKSBvbkxvYWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBvbkV4aXQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgbG9hZCgpIHtcbiAgICB0aGlzLnJ1dHRlclNlcnZpY2UubG9hZFJ1dHRlcigocHVibGljVG9rZW4pID0+IHtcbiAgICAgIHRoaXMub25TdWNjZXNzLmVtaXQocHVibGljVG9rZW4pXG4gICAgfSwgKCkgPT4ge1xuICAgICAgdGhpcy5vbkxvYWQuZW1pdCgpXG4gICAgfSwgKCkgPT4ge1xuICAgICAgdGhpcy5vbkV4aXQuZW1pdCgpXG4gICAgfSk7XG4gIH1cbiAgXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucnV0dGVyU2VydmljZS5zZXR1cCgpXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJ1dHRlclNlcnZpY2U6IE5nUnV0dGVyU2VydmljZSkge31cbn1cbiJdfQ==