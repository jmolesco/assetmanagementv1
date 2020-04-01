import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent} from '@dashboard/dashboard.component';
import { CategoryModule } from '@category/category.module';
import { ManufacturerModule } from '@manufacturer/manufacturer.module';
import { SupplierModule } from '@supplier/supplier.module';
import { ModelModule } from '@model/model.module';
import { ProcessorModule } from '@processor/processor.module';
import {HarddiskModule} from '@harddisk/harddisk.module';
import {MemoryModule} from '@memory/memory.module';
import {VideocardModule} from '@videocard/videocard.module';
import {AssetModule} from '@asset/asset.module';
const routes: Routes = [
  {
    path:"",
    component: DashboardComponent,
    pathMatch:"full"
  },
  {
    path:"category",
    loadChildren:()=> import("@pages/pages.module").then(m=>CategoryModule)
  },
  {
    path:"manufacturer",
    loadChildren:()=> import("@pages/pages.module").then(m=>ManufacturerModule)
  },
  {
    path:"supplier",
    loadChildren:()=> import("@pages/pages.module").then(m=>SupplierModule)
  },
  {
    path:"model",
    loadChildren:()=> import("@pages/pages.module").then(m=>ModelModule)
  },
  {
    path:"processor",
    loadChildren:()=> import("@pages/pages.module").then(m=>ProcessorModule)
  },
  {
    path:"harddisk",
    loadChildren:()=> import("@pages/pages.module").then(m=>HarddiskModule)
  },
  {
    path:"memory",
    loadChildren:()=> import("@pages/pages.module").then(m=>MemoryModule)
  },
  {
    path:"videocard",
    loadChildren:()=> import("@pages/pages.module").then(m=>VideocardModule)
  },
  {
    path:"asset",
    loadChildren:()=> import("@pages/pages.module").then(m=>AssetModule)
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
