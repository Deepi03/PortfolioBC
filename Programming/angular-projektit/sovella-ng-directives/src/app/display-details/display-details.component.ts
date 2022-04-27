import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent implements OnInit {


  showPara : boolean = false;

       keyPressed : number[] = [];

       keyPressCount : number = 0;

       showDiv : number = 0;
  constructor() {
    
   }

       
    
   

  ngOnInit(): void {

  }

     

  displayDetails(event:any): void{
     this.showPara = true;
     this. keyPressCount ++;
     this.showDiv = this.keyPressCount;
     this.keyPressed.push(this.keyPressCount);
   
  }

 

}
