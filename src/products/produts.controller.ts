import { Controller,Post,Body,Get, Param, Patch, Delete } from "@nestjs/common";
import { ProductService } from "./products.service";

@Controller('products')
export class ProductsController{
    constructor(private readonly productService : ProductService){}
    @Post('add-product')
    addProduct(
        @Body('title') title:String,
        @Body('description') desc:String,
        @Body('price') price:number
    ){
      let id =  this.productService.insertProduct(title,desc,price);
      return {id};
    }

    @Get('get-all-products')
    getAllProduct(){
        return this.productService.getAllProducts();
    }

    @Get('one-product/:id')
    getProductById(@Param('id') id:number){
        return this.productService.getSingleProduct(id);
    }

    @Patch('update-product/:id')
    updateProduct(
        @Param('id') id: number,
        @Body('title') title:String,
        @Body('description') desc:String,
        @Body('price') price:number
        ){
        return this.productService.updateProduct(id,title,desc,price);
    }

    @Delete('delete-product/:id')
    deleteProduct(
        @Param('id') id: number
    ){
        return this.productService.deleteProduct(id);
    }
}