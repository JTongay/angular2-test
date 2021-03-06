import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeTitle: string = "Welcome to the homepage";
  myString: string = "I like chicken";
  myBoolean: boolean = true;
  ninja = {
    name: "Yoshi",
    belt: "Black"
  }
  // @Input() ninja;
  // @Output() onYell = new EventEmitter();
  // fireYellEvent(e){
  //   this.onYell.emit(e);
  // }
  alertMe(val){
    alert(val);
  }

  constructor(private router: Router) {
  }

  goDirectory(){
    this.router.navigate(['/directory'])
  }

  ngOnInit() {
  }

}
