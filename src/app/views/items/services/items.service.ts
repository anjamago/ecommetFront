import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/services/http-service.service';
import { IProducto } from '../models/IProducto.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http$: HttpService) { }

  
  public  search(): Observable<IProducto[]> {
   return this.http$.get<IProducto[]>("/productos/api/product");
  }
}
