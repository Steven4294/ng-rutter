# Angular Rutter Link Port

Rutter Link Button for [Angular](http://angular.io); This is a simple wrapper for the javascript api that rutter provides. This is an unofficial npm package and is not endorsed or supported by Rutter.  
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
    NgRutterModule
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
