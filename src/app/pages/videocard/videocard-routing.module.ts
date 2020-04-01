import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideocardListComponent } from './videocard-list/videocard-list.component';
import { VideocardDetailComponent } from './videocard-detail/videocard-detail.component';

const routes: Routes = [
  {
    path:"",
    component:VideocardListComponent,
    pathMatch:"full"
  },
  {
    path:":id",
    component:VideocardDetailComponent,
    pathMatch:"full"
  },
  {
    path:"new",
    component:VideocardDetailComponent,
    pathMatch:"full"
  },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideocardRoutingModule { }
