import {Component} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
  p {
  color: dodgerblue;
  } `]
})
export class ServerComponent {
  serverId:number = 10;
  serverStatus:string = 'offline';

  constructor() {

  }

  getServerStatus(){
    return this.serverStatus+'.';
  }
}
