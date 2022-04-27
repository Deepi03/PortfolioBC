import { Component, Input, OnInit, Output,EventEmitter} from '@angular/core';
import { faSms } from '@fortawesome/free-solid-svg-icons';

import { IPhones } from '../shared/interface';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

  faSms = faSms;
  @Input()
  product!:IPhones;

  @Output()
  notify = new EventEmitter;
  constructor() { }

  ngOnInit(): void {
  }

}
