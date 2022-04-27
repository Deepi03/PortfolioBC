import { Component, OnInit, Output } from '@angular/core';
import {faMobileAlt}  from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { DataService } from '../core/data.service';
import { IBanner} from '../shared/interface';
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {


  banner !: IBanner;

  constructor(private dataService : DataService) { }

  ngOnInit(): void {
    this.getBanner();
  }
  faMobile = faMobileAlt;
  faShoppingCart = faShoppingCart;


  getBanner() : void {
    this.dataService.getBanner().subscribe((banners) => {
      console.log("banner");
      this.banner = banners;
      
    })
  }
}
