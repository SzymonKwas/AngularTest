import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html'
})
export class UsernameComponent implements OnInit {
  username = ' ';
  allowBtn: boolean;
  userArray = [];
  constructor() {
    this.allowBtn = true;
  }

  ngOnInit() {
  }

  onChangeUsername(event: Event) {
    this.username = (<HTMLInputElement> event.target).value;
    console.log(event);

    if (this.username) {
      this.allowBtn = false;
    }
    else {
      this.allowBtn = true;
    }
  }
  onBtnClick(){
    this.userArray.push(this.username);
    this.username = '';
    this.allowBtn = true;
  }

}
