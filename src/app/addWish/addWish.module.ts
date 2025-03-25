import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddWishPage } from './addWish.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { AddWishPageRoutingModule } from './addWish-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    AddWishPageRoutingModule
  ],
  declarations: [AddWishPage]
})
export class AddWishPageModule {}
