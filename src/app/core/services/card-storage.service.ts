import { Inject, Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import { IProducto } from 'src/app/views/items/models/IProducto.interface';
import { IPersistence } from '../models/IPersistence';

@Injectable({
  providedIn: 'root',
})
export class CardStorageService extends ComponentStore<ICard> {
  constructor(
    @Inject('IPersistence') private readonly persistence$: IPersistence
  ) {
    super({card:[]});
    this.initStateCard();
  }


  private initStateCard(): void {
    const card = this.persistence$.GetValue<ICard>('card');
    if (card !== null) {
    //  this.addStateUserAndToken(user);
    }
  }

  readonly addProductAll = this.updater((state, product: IProducto[]) => {
    return {
      card:[...state.card,...product]
    };
  });
  readonly addProduct = this.updater((state, product: IProducto) => {
    return {
      card:[...state.card,product]
    };
  });

  readonly deleteProduct = this.updater((state, product:IProducto)=>{

    const products =  state.card.filter(f=>f.productId != product.productId);

    return {
      card:[...state.card,...products]
    }; 

  });

  readonly deleteAll =this.updater((state, _)=>{
    return {
      ...state,
      ...[]
    }; 

  });

  readonly getAllProduct: Observable<IProducto[]> = this.select((state) => state.card);




}

interface ICard{
  card:IProducto[]
}
