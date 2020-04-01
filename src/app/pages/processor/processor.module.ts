import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  {FormsModule} from '@angular/forms';
import { ProcessorRoutingModule } from './processor-routing.module';
import { ProcessorListComponent } from './processor-list/processor-list.component';
import { ProcessorDetailComponent } from './processor-detail/processor-detail.component';
import {PagesModule} from '@shared/shared.module';

@NgModule({
  declarations: [ProcessorListComponent, ProcessorDetailComponent],
  exports:  [ProcessorListComponent, ProcessorDetailComponent],
  imports: [
    CommonModule,
    ProcessorRoutingModule,
    PagesModule,
    FormsModule
  ]
})
export class ProcessorModule { }
