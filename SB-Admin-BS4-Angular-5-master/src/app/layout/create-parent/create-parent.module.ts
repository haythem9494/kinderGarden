import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './create-parent-routing.module';
import { CreateParentComponent } from './create-parent.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, FormRoutingModule, PageHeaderModule],
    declarations: [CreateParentComponent]
})
export class CreateParentModule {}
