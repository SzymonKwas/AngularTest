import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: `
  //           <app-server></app-server>
  //            <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styles: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus: string = 'No server was created';
  serverName = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    console.log(event);
    this.serverName = <HTMLInputElement> event.target.value;
  }
}
