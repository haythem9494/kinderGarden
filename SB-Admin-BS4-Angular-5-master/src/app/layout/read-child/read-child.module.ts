import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from './read-child-routing.module';
import { ReadChildComponent } from './read-child.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, TablesRoutingModule, PageHeaderModule],
    declarations: [ReadChildComponent]
})
export class ReadChildModule {}
