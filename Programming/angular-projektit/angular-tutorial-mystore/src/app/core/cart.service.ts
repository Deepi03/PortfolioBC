import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPhones } from '../shared/interface';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items:IPhones[] = [];
  phoneId : any ;

  constructor(private http:HttpClient,private dataService : DataService) { }


  addToCart(id:any) {


  this.dataService.getPhones().subscribe((mobiles) => {
    console.log("test inside subs");
    this.items.push(mobiles.filter(m => m.id === id)[0]);
  }
    );
    //this.items.push("test test");

  console.log("inside cons ::" + this.items);
}   


  getItems() : IPhones[] {
    console.log("inside getIem ::" + this.items.length);

    return this.items;

  }

  cleartCart(){

    this.items = [];
    return this.items;

  }

  getShippingRates(){
     return this.http.get('assets/phones/shipping.json');
  }
}
