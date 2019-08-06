import { Component } from "@angular/core";

@Component({
    selector:'app-produce',
    templateUrl:'produce.component.html'
})
export class ProduceComponent{
    productName ='A Book';
    isDisable = true;
    
    productList = ['A Book', 'A Tree'];

    constructor(){
        setTimeout(()=>{
            this.isDisable = false;
        },3000);
    }
    
    onAddProduct(){
        this.productList.push(this.productName);
    }

    onRemoveProduct(item :string){
        this.productList =  this.productList.filter( p => p!= item);
    }
}