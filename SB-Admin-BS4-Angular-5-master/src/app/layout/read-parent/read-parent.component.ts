import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-tables',
    templateUrl: './read-parent.component.html',
    styleUrls: ['./read-parent.component.scss'],
    animations: [routerTransition()]
})
export class ReadParentComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
