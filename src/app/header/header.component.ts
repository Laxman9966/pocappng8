import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private userName : string

  constructor(
        private route: ActivatedRoute,
        private router: Router,
        ) { }

  ngOnInit() {
      this.userName =   localStorage.getItem('currentUser');
       //this.userName =   localStorage.getItem('currentUser');
  }
  
  logout(){
      alert('logout clicked');
      console.log("logout clicked..")
      localStorage.setItem('currentUser', '');
      localStorage.setItem('currentUser', '');
      this.router.navigate(["home"]);
  }

}
