import { Injectable } from '@nestjs/common';
import { Product } from './interfaces/product.interface';

@Injectable()
export class ProductService {

  private readonly products: Product[] = [];


  async create(product: Product) {
    return await this.products.push(product);
  }

  findAll(): Product[] {
    return this.products;
  }
  
}
