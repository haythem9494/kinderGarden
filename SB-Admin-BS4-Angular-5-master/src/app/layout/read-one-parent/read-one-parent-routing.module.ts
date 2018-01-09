import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReadOneParentComponent } from './read-one-parent.component';

const routes: Routes = [
    {
        path: '', component: ReadOneParentComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TablesRoutingModule {
}
