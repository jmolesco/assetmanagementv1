import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { HarddiskRoutingModule } from './harddisk-routing.module';
import { HarddiskListComponent } from './harddisk-list/harddisk-list.component';
import { HarddiskDetailComponent } from './harddisk-detail/harddisk-detail.component';
import {PagesModule} from '@shared/shared.module';

@NgModule({
  declarations: [HarddiskListComponent, HarddiskDetailComponent],
  exports: [HarddiskListComponent, HarddiskDetailComponent],
  imports: [
    CommonModule,
    HarddiskRoutingModule,
    FormsModule,
    PagesModule
  ]
})
export class HarddiskModule { }
