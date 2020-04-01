import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemoryListComponent } from './memory-list/memory-list.component';
import { MemoryDetailComponent } from './memory-detail/memory-detail.component';

const routes: Routes = [
  {
    path:"",
    component:MemoryListComponent,
    pathMatch:"full"
  },
  {
    path:":id",
    component:MemoryDetailComponent,
    pathMatch:"full"
  },
  {
    path:"new",
    component:MemoryDetailComponent,
    pathMatch:"full"
  },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemoryRoutingModule { }
