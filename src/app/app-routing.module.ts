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
import {UserModule} from '@user/user.module';
import {LoginComponent} from '@sharedPages/login/login.component';
import { AuthGuard } from '@sharedHelper/auth.guard';
const routes: Routes = [
  {
    path:"login",
    component: LoginComponent,
    pathMatch:"full"
  },
  {
    path:'',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'dashboard',
    component: DashboardComponent,
    //canActivate: [AuthGuard]
  },
  //{ path: '', component: HomeComponent, canActivate: [AuthGuard] },
  {
    path:"category",
    loadChildren:()=> import("@pages/pages.module").then(m=>CategoryModule),
    //canActivate: [AuthGuard]
  },
  {
    path:"manufacturer",
    loadChildren:()=> import("@pages/pages.module").then(m=>ManufacturerModule),
    //canActivate: [AuthGuard]
  },
  {
    path:"supplier",
    loadChildren:()=> import("@pages/pages.module").then(m=>SupplierModule),
    //canActivate: [AuthGuard]
  },
  {
    path:"model",
    loadChildren:()=> import("@pages/pages.module").then(m=>ModelModule),
    canActivate: [AuthGuard]
  },
  {
    path:"processor",
    loadChildren:()=> import("@pages/pages.module").then(m=>ProcessorModule),
    canActivate: [AuthGuard]
  },
  {
    path:"harddisk",
    loadChildren:()=> import("@pages/pages.module").then(m=>HarddiskModule),
    canActivate: [AuthGuard]
  },
  {
    path:"memory",
    loadChildren:()=> import("@pages/pages.module").then(m=>MemoryModule),
    canActivate: [AuthGuard]
  },
  {
    path:"videocard",
    loadChildren:()=> import("@pages/pages.module").then(m=>VideocardModule),
    canActivate: [AuthGuard]
  },
  {
    path:"asset",
    loadChildren:()=> import("@pages/pages.module").then(m=>AssetModule),
    canActivate: [AuthGuard]
  },
  {
    path:"user",
    loadChildren:()=> import("@pages/pages.module").then(m=>UserModule),
    canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: '' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
