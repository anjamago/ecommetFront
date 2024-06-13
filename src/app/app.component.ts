import { Component } from '@angular/core';
import { CardStorageService } from './core/services/card-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecommerce';
  count=0;
  constructor(private cardStorage:CardStorageService, private router:Router){}
  ngOnInit(){
    this.cardStorage.getAllProduct.subscribe(
      res=>this.count = res.length
    );
  }

  redirect(){

    if(this.count > 0 ){
      this.router.navigate(["/shopping"])
    }
  }



}
