import { OnInit, EventEmitter } from '@angular/core';
import { NgRutterService } from './ng-rutter.service';
export declare class NgRutterComponent implements OnInit {
    private rutterService;
    text: string;
    backgroundColor: string;
    color: string;
    onSuccess: EventEmitter<string>;
    onLoad: EventEmitter<{}>;
    onExit: EventEmitter<{}>;
    load(): void;
    ngOnInit(): void;
    constructor(rutterService: NgRutterService);
}
