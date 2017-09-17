import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{
    type: 'server', name: 'testserver', content: 'im just a server'
  }, {
    type: 'server1', name: 'testserver1', content: 'im just a server1'
  }];

}
