import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HarddiskListComponent } from './harddisk-list/harddisk-list.component';
import { HarddiskDetailComponent } from './harddisk-detail/harddisk-detail.component';

const routes: Routes = [
  {
    path:"",
    component:HarddiskListComponent,
    pathMatch:"full"
  },
  {
    path:":id",
    component:HarddiskDetailComponent,
    pathMatch:"full"
  },
  {
    path:"new",
    component:HarddiskDetailComponent,
    pathMatch:"full"
  },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HarddiskRoutingModule { }
