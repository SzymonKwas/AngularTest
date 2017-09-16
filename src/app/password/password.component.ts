import {Component, OnInit} from '@angular/core';
import {iterator} from "rxjs/symbol/iterator";

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  haslo = 'mojetajnehaslo';
  iterator: number;
  itArray = [];
  constructor() {
    this.iterator = 0;
  }

  ngOnInit() {
  }
  onBtnClick(){
  this.iterator++;
  this.itArray.push(new Date());
  }
  getColor(it){
    if(it> 4){
      return 'blue';
    }
    else {
      return 'grey';
    }
  }
}
