import { Component, Input, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  
  faCoffee = faCoffee;
  @Input('server') instruction!: {status:string,tableNumber:string,orderNumber:string};
  
  constructor() { }

  ngOnInit(): void {
  }
}
