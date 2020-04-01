import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AssetListComponent} from './asset-list/asset-list.component';
import {AssetDetailComponent} from './asset-detail/asset-detail.component';


const routes: Routes = [
  {
    path:"",
    component:AssetListComponent,
    pathMatch:"full"
  },
  {
    path:":id",
    component:AssetDetailComponent,
    pathMatch:"full"
  },
  {
    path:"new",
    component:AssetDetailComponent,
    pathMatch:"full"
  }

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetRoutingModule { }
