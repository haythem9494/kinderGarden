import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-tables',
    templateUrl: './read-child.component.html',
    styleUrls: ['./read-child.component.scss'],
    animations: [routerTransition()]
})
export class ReadChildComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
