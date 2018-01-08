import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-child-routing.module';
import { FormChildComponent } from './form-child.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, FormRoutingModule, PageHeaderModule],
    declarations: [FormChildComponent]
})
export class FormModule {}
