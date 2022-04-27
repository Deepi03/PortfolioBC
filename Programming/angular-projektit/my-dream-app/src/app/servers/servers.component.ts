import { Component, OnInit ,  Output} from '@angular/core';


@Component({
 // selector: 'app-servers',
 selector: 'app-servers',
 templateUrl: './servers.component.html',
 styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

   allowNewServer : boolean = false;

   serverCreated : boolean = false ; 

  constructor() { 
    setTimeout(() =>{
      this.allowNewServer =true;
    },2000)
  }

  ngOnInit(): void {
  }

   serverCreationStatus : String = "No Server was created";

    serverName :string = "";
    serverNameToChild: string = "";
    servers : String[] = [];  

  //  onUpdateServerName(event:any)  {

  //   // console.log(event);
  //    this.serverName = (<HTMLInputElement>event.target).value;
  //  }


   onCreateServer(event:any) : void{

    this.serverCreated = true;
    this.serverCreationStatus = "Server was created!Server name is " + this.serverName;
    this.serverNameToChild = this.serverName;
    this.servers.push(this.serverName);
    

   }


  

   





}
