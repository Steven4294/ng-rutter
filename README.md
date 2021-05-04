# Unofficial Angular Rutter Link Port

Rutter Link Button for [Angular](http://angular.io); This is a simple wrapper for the javascript api that rutter provides. This is an unofficial npm package and is not endorsed or supported by Rutter. Source code is [here](https://github.com/Steven4294/ng-rutter)  
# Installation
```js
npm install ng-rutter --save
```

# Usage

### Import `NgRutterModule`

You need to import the `NgRutterModule` in the module of your app where you want to use it.

```js
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgRutterModule } from 'ng-rutter';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgRutterModule.forRoot({
      PUBLIC_API_KEY: 'MY_PUBLIC_API_KEY'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### Use the `ng-rutter` selector
Place the `ng-rutter` and pass the an event handler to process the publicToken handled by rutter. 

```html
<ng-rutter (onSuccess)="onSuccess($event)"></ng-rutter>
```

Handle the token response in your component.
```js
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  onSuccess(token: string) {
    callBackendAPI(token)
  }
}
```
### Inputs 

| Name            | Type   | Description                    | Default  |
|-----------------|--------|--------------------------------|----------|
| text            | string | the button text                | "Log In" |
| backgroundColor | string | background color of the button | '#000'   |
| color           | string | the button text color          | '#FFF'   |

### Outputs

| Name      | Returns | Description                     |
|-----------|---------|---------------------------------|
| onSuccess | string  | User successfully authenticated |
| onLoad    | void    | Rutter alert loaded             |
| onExit    | void    | Rutter alert exited             |

### Use the `NgRutterService` to load Rutter programmatically 

If you don't like the styling of the out of the box button you can trigger the Rutter dialog programmatically using the NgRutterService. This allows you to style the rutter link button as you'd like.

```html
<div (click)="openRutter()"> Custom Button </div>
```

```js
import { Component, OnInit } from '@angular/core';
import { NgRutterService, NgRutterEventType } from './modules/ng-rutter/ng-rutter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private service: NgRutterService) {
    this.service.observable.subscribe(event => {
      if (event.name === NgRutterEventType.SUCCESS) {
        console.log(event.data.token)
      }
      if (event.name === NgRutterEventType.LOAD) {
        
      }
      if (event.name === NgRutterEventType.EXIT) {
        
      }
    })
  }

  openRutter() {
    this.service.open()
  }
}

```

