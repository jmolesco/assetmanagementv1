import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { AssetRoutingModule } from './asset-routing.module';
import { AssetListComponent } from './asset-list/asset-list.component';
import { AssetDetailComponent } from './asset-detail/asset-detail.component';
import { PagesModule} from '@shared/shared.module';

@NgModule({
  declarations: [AssetListComponent, AssetDetailComponent],
  imports: [
    CommonModule,
    AssetRoutingModule,
    FormsModule,
    PagesModule
  ]
})
export class AssetModule { }
