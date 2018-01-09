import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { FormRoutingModule } from './create-parent-routing.module';
import { CreateParentComponent } from './create-parent.component';
import { PageHeaderModule } from './../../shared';
import { HttpClientModule } from '@angular/common/http';
 import { HttpModule } from '@angular/http';


@NgModule({
    imports: [
        
        CommonModule, 
        FormRoutingModule, 
        PageHeaderModule,
        FormsModule,
        ReactiveFormsModule,HttpClientModule,HttpModule

    ],
    declarations: [CreateParentComponent]
})
export class CreateParentModule {}
