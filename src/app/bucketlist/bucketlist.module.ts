import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BucketListPage } from './bucketlist.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { BucketListPageRoutingModule } from './bucketlist-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    BucketListPageRoutingModule
  ],
  declarations: [BucketListPage]
})
export class BucketListPageModule {}
