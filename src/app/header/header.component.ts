import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private userName : string
  usertype : string ;
  
  constructor(
        private route: ActivatedRoute,
        private router: Router,
        ) { }

  ngOnInit() {
      this.userName =   localStorage.getItem('name');
       //this.userName =   localStorage.getItem('currentUser');
       this.usertype =   localStorage.getItem('usertype');
  }
  
  logout(){
      localStorage.setItem('name', '');
      localStorage.setItem('currentUser', '');
      this.userName = '';
      this.router.navigate(["login"]);
  }

}
