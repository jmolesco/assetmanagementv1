import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupplierDetailComponent } from './supplier-detail/supplier-detail.component';
import { SupplierListComponent } from './supplier-list/supplier-list.component';


const routes: Routes = [
  {
    path:"",
    component:SupplierListComponent,
    pathMatch:"full"
  },
  {
    path:":id",
    component:SupplierDetailComponent,
    pathMatch:"full"
  },
  {
    path:"new",
    component:SupplierDetailComponent,
    pathMatch:"full"
  },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierRoutingModule { }
