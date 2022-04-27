import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../core/cart.service';
import { DataService } from '../core/data.service';
import { IPhones } from '../shared/interface';
import { Location } from '@angular/common';
import {faLongArrowAltLeft} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  phoneDetail ! : IPhones;
  phone:any;
  faLongArrowAltLeft = faLongArrowAltLeft;

  constructor(private dataService : DataService,
              private route : ActivatedRoute,
              private cartService :CartService,
              private location : Location) { }

  ngOnInit(): void {
    let id = String(this.route.snapshot.paramMap.get('id')); //gets id from the url

    this.dataService.getPhones().subscribe((phoneDetail) =>
      {

        this.phoneDetail = phoneDetail.filter(p => p.id === id)[0];
        // console.log(this.phoneDetail);
      })
      
    //  this.phoneDetail = this.phone;
      }
      addToCart(product:any){
        window.alert(this.phoneDetail.name + "added to  cart successfully");
        this.cartService.addToCart(product);
        console.log(product);
        
      }
     goBack(): void{
        this.location.back();
      }

      
}
