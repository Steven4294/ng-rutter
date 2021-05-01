import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgRutterService } from './ng-rutter.service';

@Component({
  selector: 'ng-rutter',
  templateUrl: './ng-rutter.component.html',
  styleUrls: ['./ng-rutter.component.scss']
})

export class NgRutterComponent implements OnInit {
  @Input() text = 'Log in';
  @Input() backgroundColor = '#000';
  @Input() color = '#FFF';

  @Output() onSuccess = new EventEmitter<string>();
  @Output() onLoad = new EventEmitter();
  @Output() onExit = new EventEmitter();

  load() {
    this.rutterService.loadRutter((publicToken) => {
      this.onSuccess.emit(publicToken)
    }, () => {
      this.onLoad.emit()
    }, () => {
      this.onExit.emit()
    });
  }
  
  ngOnInit() {
    this.rutterService.setup()
  }

  constructor(private rutterService: NgRutterService) {}
}
