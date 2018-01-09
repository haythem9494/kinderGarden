import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './create-child-routing.module';
import { CreateChildComponent } from './create-child.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, FormRoutingModule, PageHeaderModule],
    declarations: [CreateChildComponent]
})
export class CreateChildModule {}
