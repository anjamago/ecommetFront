import { Component } from '@angular/core';
import { CardStorageService } from 'src/app/core/services/card-storage.service';
import { IProducto } from 'src/app/views/items/models/IProducto.interface';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent {

  products:IProducto[] = [];
  constructor(
    private readonly $cardService :CardStorageService
  ){

  }

  ngOnInit(){
    this.$cardService.getAllProduct.subscribe(
      res=> this.products = res
    );
  }

}
