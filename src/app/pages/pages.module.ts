import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {CategoryModule} from '@category/category.module';
import {ManufacturerModule} from '@manufacturer/manufacturer.module';
import {SupplierModule} from '@supplier/supplier.module';
import {ModelModule} from '@model/model.module';
import {ProcessorModule} from '@processor/processor.module';
import {HarddiskModule} from '@harddisk/harddisk.module';
import {MemoryModule} from '@memory/memory.module';
import {VideocardModule} from '@videocard/videocard.module';
import {AssetModule} from '@asset/asset.module';

@NgModule({
  declarations: [DashboardComponent],
  exports:[DashboardComponent,CategoryModule, ManufacturerModule, SupplierModule, ModelModule,HarddiskModule, ProcessorModule,MemoryModule,VideocardModule],
  imports: [
    CommonModule,
    CategoryModule,
    ManufacturerModule,
    SupplierModule,
    ModelModule,
    ProcessorModule,
    HarddiskModule,
    MemoryModule,
    VideocardModule,
    AssetModule
  ]
})
export class PagesModule { }




