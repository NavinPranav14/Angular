import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewserver = false;
  serverCreate = "No server was created";
  serverName = "";
  serverCreatedStatus = false;
  servers :string[]= [];

  constructor() { 
    setTimeout(() => {
      this.allowNewserver = true
    }, 2000);
   }

  ngOnInit(): void {
  }

  onCreateButton(){
    this.serverCreate = "Server was created and the server name is " + this.serverName;
    this.servers.push(this.serverName);
    this.serverCreatedStatus = true;
  }
  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
