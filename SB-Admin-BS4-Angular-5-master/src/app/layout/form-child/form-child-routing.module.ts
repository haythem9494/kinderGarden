import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormChildComponent } from './form-child.component';

const routes: Routes = [
    {
        path: 'FormChild', component: FormChildComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FormRoutingModule {
}
