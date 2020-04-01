import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { VideocardRoutingModule } from './videocard-routing.module';
import { VideocardListComponent } from './videocard-list/videocard-list.component';
import { VideocardDetailComponent } from './videocard-detail/videocard-detail.component';
import {PagesModule} from '@shared/shared.module';

@NgModule({
  declarations: [VideocardListComponent, VideocardDetailComponent],
  exports: [VideocardListComponent, VideocardDetailComponent],
  imports: [
    CommonModule,
    VideocardRoutingModule,
    FormsModule,
    PagesModule
  ]
})
export class VideocardModule { }
