import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsModule } from './views/items/items.module';
import { share } from 'rxjs';
import { shoppingModule } from './views/shopping/shopping.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./views/items/items.module').then(
        (m) => ItemsModule
      ),
  },
  {
    path:"shopping",
    loadChildren:()=>
      import("./views/shopping/shopping.module").then(
        (m)=>shoppingModule
      )
  },

  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
