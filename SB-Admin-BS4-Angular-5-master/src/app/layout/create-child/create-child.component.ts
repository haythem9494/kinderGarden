import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-form',
    templateUrl: './create-child.component.html',
    styleUrls: ['./create-child.component.scss'],
    animations: [routerTransition()]
})
export class CreateChildComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
