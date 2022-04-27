import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/data.service';
import { IPhones } from '../shared/interface';
import {faFacebookF}  from '@fortawesome/free-brands-svg-icons';
import {faTwitterSquare}  from '@fortawesome/free-brands-svg-icons';
import {faInstagramSquare}  from '@fortawesome/free-brands-svg-icons';
import { CartService } from '../core/cart.service';

@Component({
  selector: 'app-phone-models',
  templateUrl: './phone-models.component.html',
  styleUrls: ['./phone-models.component.css']
})
export class PhoneModelsComponent implements OnInit {


  mobiles : IPhones[] = [];
  
  
  constructor(private dataService : DataService,private cartService : CartService) { }

  ngOnInit(): void {
    this.getPhones();
  }
  faFacebook = faFacebookF;
  
  faTwitterSquare =faTwitterSquare;

  faInstagramSquare = faInstagramSquare;
  getPhones() : void {

    this.dataService.getPhones().subscribe((mobiles) => 
    this.mobiles = mobiles);

  }

  share(){
         window.alert('The product has been shared!');
         
  }

  addToCart(id:any){

    this.cartService.addToCart(id);
    window.alert("item added");

  }


  onNotify(){
    window.alert("you will be notified when the product goes on sale!");
  }
}
