import { Component } from "@angular/core";

@Component({
    selector:'app-produce',
    templateUrl:'produce.component.html'
})
export class ProduceComponent{
productName ='A Book';
isDisable = true;

constructor(){
    setTimeout(()=>{
        this.isDisable = false;
    },3000);
}
}