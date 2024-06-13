import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ShoppingComponent } from "./components/shopping/shopping.component";
import { RouterModule } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";




@NgModule({
    declarations: [
      ShoppingComponent
    ],
    imports: [
      CommonModule,
      SharedModule,
      RouterModule.forChild([{
        path: '',
        component: ShoppingComponent
      }])
    ]
  })
  export class shoppingModule { }

