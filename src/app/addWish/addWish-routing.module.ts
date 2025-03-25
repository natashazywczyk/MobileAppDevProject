import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddWishPage } from './addWish.page';

const routes: Routes = [
  {
    path: '',
    component: AddWishPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddWishPageRoutingModule {}
