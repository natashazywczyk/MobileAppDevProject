import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { EditWishPage } from './edit-wish/edit-wish.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },{
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    
    path: 'theme',
    loadChildren: () => import('./theme/theme.module').then( m => m.ThemePageModule)
  },
  {
    path: 'edit-wish',
    loadChildren: () => import('./edit-wish/edit-wish.module').then( m => m.EditWishPageModule)
  },
  { path: 'edit-wish/:id', component: EditWishPage }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
