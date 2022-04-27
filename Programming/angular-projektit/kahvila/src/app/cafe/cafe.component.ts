import { Component, Input, OnInit, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-cafe',
  templateUrl: './cafe.component.html',
  styleUrls: ['./cafe.component.css']
})
export class CafeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 

  newtableNumber = '';
  neworderNumber = '';
  @Output() sales = new EventEmitter<{tableNumber:string, orderNumber:string}>();
  @Output() serve = new EventEmitter<{tableNumber:string, orderNumber:string}>();;


  coffeeSold()  {
    this.sales.emit({
    
      tableNumber: this.newtableNumber,
      orderNumber: this.neworderNumber
    });
  }

  coffeeServed() {
    this.serve.emit({
   
      tableNumber: this.newtableNumber,
      orderNumber: this.neworderNumber
    });
  }
}
