import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username-check',
  templateUrl: './username-check.component.html',
  styleUrls: ['./username-check.component.css']
})
export class UsernameCheckComponent implements OnInit {

  
  username : String = "";
  


  
  constructor() {
  
   }

  ngOnInit(): void {
    

  }
  isDisable :boolean = true;
  onUserNameEntered(event:any){

    this.username = (<HTMLInputElement>event.target).value;

    this.isDisable = false;  
  }

  
  onResetUsername(event :any){
    this.username ="";
  }


 
  
  


  
  


}
