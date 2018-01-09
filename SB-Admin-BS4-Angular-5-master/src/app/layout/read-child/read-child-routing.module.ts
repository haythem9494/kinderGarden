import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReadChildComponent } from './read-child.component';

const routes: Routes = [
    {
        path: '', component: ReadChildComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TablesRoutingModule {
}
