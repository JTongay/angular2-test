import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
  title = 'booyah';
  booyah = 'hello there';
  ninja = {
    name: "Ryu",
    belt: "Red"
  };

  yell(e){
    alert("I am yelling");
    console.log(e);
  }
}
