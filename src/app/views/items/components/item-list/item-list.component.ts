import { Component } from '@angular/core';
import { IProducto } from '../../models/IProducto.interface';
import { SelectItem } from 'primeng/api';
import { ItemsService } from '../../services/items.service';
import { CardStorageService } from 'src/app/core/services/card-storage.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent {
  

  products: IProducto[] = [];

  constructor(
    private itemsService$: ItemsService,
    private cardStorage$:CardStorageService
  ) {}

  ngOnInit() {
    this.itemsService$.search().subscribe(
      res=>{
        console.log(res);
        this.products = res;
      }
    );
  }


  AddToCard(item:IProducto){
    console.log(item);
    this.cardStorage$.addProduct(item);
  }
 

}
