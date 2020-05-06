import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PagesModule} from '@sharedPages/pages.module';


@NgModule({
  declarations: [],
  exports:[PagesModule],
  imports: [
    CommonModule,
    PagesModule
  ]
})
export class SharedModule { }
export {BaseRequestService} from '@sharedService/base-request.service';
export {ChildRequestService} from '@sharedService/child-request.service';
export {constantKeywords} from '@sharedHelper/constantKeywords'
export {PagesModule} from '@sharedPages/pages.module';