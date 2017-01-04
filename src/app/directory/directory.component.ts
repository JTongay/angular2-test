import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {

  ninja: string;

  constructor(private router: Router, private activatedroute: ActivatedRoute) {
    this.ninja = activatedroute.snapshot.params['ninja']
  }

  goHome(){
    this.router.navigate(['/'])
  }

  ngOnInit() {
  }

}
