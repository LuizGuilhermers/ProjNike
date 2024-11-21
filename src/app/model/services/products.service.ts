import { Injectable } from '@angular/core';
import { Iproducts } from './iproducts';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Iproducts[] =[
    {id: 1, name: 'Nike Black', price: 60.0, image_url: './nike.jpg', description: ''},
    {id: 2, name: 'Nike Black', price: 60.0, image_url: './nike.jpg', description: ''},
    {id: 3, name: 'Nike Black', price: 60.0, image_url: './nike.jpg', description: ''}
  ];
  
  getProducts(): Iproducts[]{
    return this.products;
  }
}
