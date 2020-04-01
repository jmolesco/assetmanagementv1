import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { ManufacturerRoutingModule } from './manufacturer-routing.module';
import { ManufacturerListComponent } from './manufacturer-list/manufacturer-list.component';
import { ManufacturerDetailComponent } from './manufacturer-detail/manufacturer-detail.component';
import {PagesModule} from '@shared/shared.module';

@NgModule({
  declarations: [ManufacturerListComponent, ManufacturerDetailComponent],
  exports: [ManufacturerListComponent, ManufacturerDetailComponent],
  imports: [
    CommonModule,
    ManufacturerRoutingModule,
    FormsModule,
    PagesModule
  ]
})
export class ManufacturerModule { }
