import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-tables',
    templateUrl: './read-one-parent.component.html',
    styleUrls: ['./read-one-parent.component.scss'],
    animations: [routerTransition()]
})
export class ReadOneParentComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
