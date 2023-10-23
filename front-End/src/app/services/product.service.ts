import { Injectable } from '@angular/core';
import { Product } from '../shared/models/product';
import { sample_products } from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getAll():Product[]{
    return sample_products;
  }
  getAllProductsBySearchTerm(searchTerm:string){
    return this.getAll().filter(Product =>Product.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }
}
