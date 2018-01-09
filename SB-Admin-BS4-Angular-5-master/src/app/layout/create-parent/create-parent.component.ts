import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-form',
    templateUrl: './create-parent.component.html',
    styleUrls: ['./create-parent.component.scss'],
    animations: [routerTransition()]
})
export class CreateParentComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
