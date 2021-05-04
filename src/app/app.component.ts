import { Component, OnInit } from '@angular/core';
import { NgRutterService, NgRutterEventType } from './modules/ng-rutter/ng-rutter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() { }
  constructor(private service: NgRutterService) {
    this.service.observable.subscribe(event => {
      if (event.name === NgRutterEventType.SUCCESS) {
        console.log(event.data.token)
      }
      if (event.name === NgRutterEventType.LOAD) {
        console.log(`rutter loaded`)
      }
    })
  }

  openRutter() {
    this.service.open()
  }
}
