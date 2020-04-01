import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { MemoryRoutingModule } from './memory-routing.module';
import { MemoryListComponent } from './memory-list/memory-list.component';
import { MemoryDetailComponent } from './memory-detail/memory-detail.component';
import {PagesModule} from '@shared/shared.module';


@NgModule({
  declarations: [MemoryListComponent, MemoryDetailComponent],
  exports: [MemoryListComponent, MemoryDetailComponent],
  imports: [
    CommonModule,
    MemoryRoutingModule,
    FormsModule,
    PagesModule
  ]
})
export class MemoryModule { }
