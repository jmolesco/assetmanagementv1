import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManufacturerListComponent } from './manufacturer-list/manufacturer-list.component';
import { ManufacturerDetailComponent } from './manufacturer-detail/manufacturer-detail.component';



const routes: Routes = [
  {
    path:"",
    component:ManufacturerListComponent,
    pathMatch:"full"
  },
  {
    path:":id",
    component:ManufacturerDetailComponent,
    pathMatch:"full"
  },
  {
    path:"new",
    component:ManufacturerDetailComponent,
    pathMatch:"full"
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManufacturerRoutingModule { }
