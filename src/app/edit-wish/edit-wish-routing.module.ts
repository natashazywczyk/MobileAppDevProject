import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditWishPage } from './edit-wish.page';

const routes: Routes = [
  {
    path: '',
    component: EditWishPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditWishPageRoutingModule {}
