import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeTitle = "Welcome to the homepage";
  myString = "I like chicken";
  myBoolean = true;
  @Input() ninja;
  @Output() onYell = new EventEmitter();
  // ninja = {
  //   name: "Yoshi",
  //   belt: "Black"
  // }
  fireYellEvent(e){
    this.onYell.emit(e);
  }
  alertMe(val){
    alert(val);
  }

  constructor() {
  }

  ngOnInit() {
  }

}
