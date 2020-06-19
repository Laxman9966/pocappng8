import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { ApiservicesService } from '../services/apiservices.service';

import {User} from "../model/user";
import {Course} from "../model/course";



@Component({
  selector: 'app-listcourses',
  templateUrl: './listcourses.component.html',
  styleUrls: ['./listcourses.component.css']
})
export class ListcoursesComponent implements OnInit {

  users: User[];
  courses: Course[];

  constructor(private router : Router, private apiService : ApiservicesService) { }

  ngOnInit() {
    this.apiService.getAllCourses()
      .subscribe( data => {
        console.log("************ courses list "+JSON.stringify(data));
        this.courses = data;
      });
  }

  deleteUser(user: Course): void {
    // this.employerService.deleteUser(user.id)
    //   .subscribe( data => {
    //     this.users = this.users.filter(u => u !== user);
    //   })
  };

  editUser(user: Course): void {
    localStorage.removeItem("editUserId");
    localStorage.setItem("editUserId", user.id.toString());
    this.router.navigate(['edit-employer']);
  };

  addUser(): void {
    this.router.navigate(['add-employer']);
  };

  
}
