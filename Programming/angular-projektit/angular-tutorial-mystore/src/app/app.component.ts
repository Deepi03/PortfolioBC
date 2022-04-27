import { Component } from '@angular/core';
import { IBanner } from './shared/interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-tutorial-mystore';
  bannerImg! : IBanner;
}
