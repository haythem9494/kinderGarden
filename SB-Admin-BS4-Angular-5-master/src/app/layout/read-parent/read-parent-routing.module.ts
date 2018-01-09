import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReadParentComponent } from './read-parent.component';

const routes: Routes = [
    {
        path: '', component: ReadParentComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TablesRoutingModule {
}
