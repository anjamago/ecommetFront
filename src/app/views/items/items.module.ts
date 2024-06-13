import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { ItemListComponent } from './components/item-list/item-list.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ItemListComponent
  ],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    SharedModule
  ]
})
export class ItemsModule { }
