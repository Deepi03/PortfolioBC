import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servingInstruction :any []= [];
 
  

  coffeeSold(orderData:{tableNumber:string,orderNumber:string})  {
    this.servingInstruction.push({
      status:'ordered',
      tableNumber: orderData.tableNumber,
      orderNumber: orderData.orderNumber
    });
  }

  coffeeServed(serveData:{tableNumber:string,orderNumber:string}) {
    this.servingInstruction.push({
      status: 'served',
      tableNumber: serveData.tableNumber,
      orderNumber: serveData.orderNumber
    });
  }
}