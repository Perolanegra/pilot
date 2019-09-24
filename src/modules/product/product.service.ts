import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
import { Product } from './interfaces/product.interface';

@Injectable()
export class ProductService {
  constructor(@Inject('PRODUCT_MODEL') private readonly productModel: Model<any>) {}

  async create(): Promise<Product> {
    const createdProd = new this.productModel();
    return await createdProd.save();
  }

  async findAll(): Promise<Product[]> {
    return await this.productModel.find().exec();
  }
  
}
