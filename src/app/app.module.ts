import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgRutterModule } from './modules/ng-rutter/ng-rutter.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgRutterModule.forRoot({
      PUBLIC_API_KEY: 'sandbox_pk_d3887e18-5eb1-45c0-acb1-be795bf0d7b1'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
