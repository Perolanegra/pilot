import { Controller, Get, Post, Res, HttpStatus, Body } from '@nestjs/common';
import { Response } from 'express';
import { ProductService } from './product.service';
import { Product } from './interfaces/product.interface';

@Controller('product')
export class ProductController {

  constructor(private readonly productService: ProductService) {}

  @Post()
  async create(@Res() res: Response, @Body() createProductDto: Product) {
    this.productService.create(createProductDto);
    res.status(HttpStatus.CREATED).send();
  }

  @Get()
  async findAll(@Res() res: Response) {
    return res.status(HttpStatus.OK).json(this.productService.findAll());
  }

  @Get('/:id')
  findById(@Res() res: Response, req: Request) {
    res.status(HttpStatus.OK).send({ req });
  }
 

}