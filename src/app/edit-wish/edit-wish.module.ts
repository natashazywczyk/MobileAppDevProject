import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditWishPageRoutingModule } from './edit-wish-routing.module';

import { EditWishPage } from './edit-wish.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditWishPageRoutingModule
  ],
  declarations: [EditWishPage]
})
export class EditWishPageModule {}
