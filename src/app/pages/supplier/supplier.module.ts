import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplierRoutingModule } from './supplier-routing.module';
import { SupplierDetailComponent } from './supplier-detail/supplier-detail.component';
import { SupplierListComponent } from './supplier-list/supplier-list.component';
import { FormsModule }   from '@angular/forms';
import {PagesModule} from '@shared/shared.module';

@NgModule({
  declarations: [SupplierDetailComponent, SupplierListComponent],
  exports: [SupplierDetailComponent, SupplierListComponent],
  imports: [
    CommonModule,
    SupplierRoutingModule,
    FormsModule,
    PagesModule
  ]
})
export class SupplierModule { }
