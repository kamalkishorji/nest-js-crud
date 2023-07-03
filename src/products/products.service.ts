import { Injectable } from "@nestjs/common/decorators/core";
import { Product } from "./products.model";
@Injectable()
export class ProductService{
   private products:Product[] = [];

    insertProduct(title:String,description:String,price:number){
        const id = this.products.length || 1;
        let product = new Product(id,title,description,price);
        this.products.push(product);
        return id;
    }

    getAllProducts(){
        return [...this.products];
    }

    getSingleProduct(id:number){
        let product = this.products.find(p=>p.id==id);
        if(!product){
         throw new Error("Product not found");
        }
        return {...product};
    }
    updateProduct(id:number,title:String,description:String,price:number){
        let idx = this.products.findIndex(p=>p.id == id);
        if(idx<0){
           throw new Error(`Product with given id: ${id} not found`)
        }
        let product = this.products[idx];
        if(title){
            product.title = title;
        }
        if(description){
            product.description = description;
        }
        if(price){
            product.price = price;
        }
        this.products[idx] = product;
        return {...product}
    }

    deleteProduct(id:number){
      let product = this.products.find(p=>p.id==id);
      this.products = this.products.filter(p=>p.id != id);
      return product;
    }
}