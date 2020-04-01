import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModelListComponent } from './model-list/model-list.component';
import {ModelDetailComponent} from './model-detail/model-detail.component';

const routes: Routes = [
  {
    path:"",
    component:ModelListComponent,
    pathMatch:"full"
  },
  {
    path:":id",
    component:ModelDetailComponent,
    pathMatch:"full"
  },
  {
    path:"new",
    component:ModelDetailComponent,
    pathMatch:"full"
  },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModelRoutingModule { }
