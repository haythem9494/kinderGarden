import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateChildComponent } from './create-child.component';

const routes: Routes = [
    {
        path: '', component: CreateChildComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FormRoutingModule {
}
