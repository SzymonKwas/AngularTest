import {Component} from '@angular/core';

@Component({
  selector: 'app-warning',
  template: `<h1>{{tekst}}!</h1><hr><p>ostrzezenie</p>`,
  styles: [`
  p{
  color: red;
  }
  h1{
  color: orange;
  }`]
})
export class WarningComponent {
  tekst: string;

  constructor() {
    this.tekst = 'UWAGA!';
  }
}
