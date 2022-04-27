import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {


  serverId :number =  Math.floor(Math.random() * 10);
  serverStatus:string = "offline";
  @Input() serverName : string = "";
  getColor(){
     return this.serverStatus === 'online' ? 'green'  : 'red';
  }

  getServerStatus (){
    return this.serverStatus;
  }

  constructor() {
      this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
   }

  ngOnInit(): void {
  }

 

}
