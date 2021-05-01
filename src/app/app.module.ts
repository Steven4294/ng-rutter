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
      PUBLIC_API_KEY: 'TEST_API_KEY',
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
