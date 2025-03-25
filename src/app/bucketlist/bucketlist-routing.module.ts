import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BucketListPage } from './bucketlist.page';

const routes: Routes = [
  {
    path: '',
    component: BucketListPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BucketListPageRoutingModule {}
