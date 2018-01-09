import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from './read-parent-routing.module';
import { ReadParentComponent } from './read-parent.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, TablesRoutingModule, PageHeaderModule],
    declarations: [ReadParentComponent]
})
export class ReadParentModule {}
