import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-form-child',
    templateUrl: './form-child.component.html',
    styleUrls: ['./form-child.component.scss'],
    animations: [routerTransition()]
})
export class FormChildComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
