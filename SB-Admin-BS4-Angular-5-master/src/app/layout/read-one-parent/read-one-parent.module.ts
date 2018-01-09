import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from './read-one-parent-routing.module';
import { ReadOneParentComponent } from './read-one-parent.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, TablesRoutingModule, PageHeaderModule],
    declarations: [ReadOneParentComponent]
})
export class ReadOneParentModule {}
