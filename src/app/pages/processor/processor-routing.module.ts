import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProcessorListComponent } from './processor-list/processor-list.component';
import { ProcessorDetailComponent } from './processor-detail/processor-detail.component';


const routes: Routes = [
  {
    path:"",
    component:ProcessorListComponent,
    pathMatch:"full"
  },
  {
    path:":id",
    component:ProcessorDetailComponent,
    pathMatch:"full"
  },
  {
    path:"new",
    component:ProcessorDetailComponent,
    pathMatch:"full"
  },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcessorRoutingModule { }
