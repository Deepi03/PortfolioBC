import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name :String = "";

  displayValue:String = "";

 
  onChange(event:String):void{

this.displayValue = event;
  }
}
