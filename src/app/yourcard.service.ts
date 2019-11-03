import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YourcardService {
  item=[];
  addToCart(product)
  {
    this.item.push(product);
  }
  getItems()
  {
    return this.item;
  }
  clearCart()
  {
    return this.item=[];
    return this.item;
  }
  constructor() { }
}
