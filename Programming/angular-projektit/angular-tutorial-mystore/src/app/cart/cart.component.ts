import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../core/cart.service';
// import { IPhones } from '../shared/interface';
import {faLongArrowAltLeft} from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common';
import { IPhones } from '../shared/interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

 faLongArrowAltLeft = faLongArrowAltLeft;
  items:IPhones[]=[];
  checkoutForm: any;


  constructor(private cartService : CartService ,
    private formBuilder:FormBuilder,
     private location : Location) {
     
      console.log("cartComponent");
    
      this.items = this.cartService.getItems();
   
      console.log("from card compo ::" + this.items[0]);
      this.checkoutForm = this.formBuilder.group({
      name : '',
      address : ''
    });
   }
 

   onSubmit(customerData:any){

    console.warn('Your order has been submitted',customerData);
    window.alert('Your order has been submitted');
    this.items = this.cartService.cleartCart();
    this.checkoutForm.reset();
    console.log(customerData);
   }

  


goBack(): void{
        this.location.back();
      }



  ngOnInit(): void {

  }

 


}
