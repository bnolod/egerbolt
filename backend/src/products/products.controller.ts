import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe } from '@nestjs/common';
import { ProductsService } from './products.service';
import { OrderByValidationPipe } from './orderBy-validation.pipe';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  findAll(
    @Query('page', ParseIntPipe) page = 1, // ParseIntPipe will validate the page query
    @Query('search') search = '',
    @Query('orderBy', OrderByValidationPipe) orderBy: 'asc' | 'desc' = 'asc',
  ) {
    return this.productsService.findAll(+page, search, orderBy);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
