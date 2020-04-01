import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  {FormsModule} from '@angular/forms';
import { ModelRoutingModule } from './model-routing.module';
import { ModelListComponent } from './model-list/model-list.component';
import { ModelDetailComponent } from './model-detail/model-detail.component';
import {PagesModule} from '@shared/shared.module';

@NgModule({
  declarations: [ModelListComponent, ModelDetailComponent],
  exports: [ModelListComponent, ModelDetailComponent],

  imports: [
    CommonModule,
    ModelRoutingModule,
    FormsModule,
    PagesModule
  ]
})
export class ModelModule { }
