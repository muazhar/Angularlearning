import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EventManager } from '@angular/platform-browser';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() pName :string;
  @Output() productClicked = new EventEmitter();
  
  
  constructor() { }
  
  ngOnInit() {
  }
  
  
  onClicked(){
    this.productClicked.emit();
  }
  
}
