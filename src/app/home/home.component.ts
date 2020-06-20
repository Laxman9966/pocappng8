import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usertype : string ;
  constructor() { }

  ngOnInit() {
    this.usertype =   localStorage.getItem('usertype');
    console.log(" #### " +this.usertype);
  }

}
