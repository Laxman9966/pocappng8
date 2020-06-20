import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

import {CourseenrolementsComponent} from '../courseenrolements/courseenrolements.component';

import { ApiService } from '../services/apiservice';
import {User} from "../model/user";
import {Course} from "../model/course";
import { Cenrole } from "../model/cenrole";

@Component({
  selector: 'app-listcourses',
  templateUrl: './listcourses.component.html',
  styleUrls: ['./listcourses.component.css']
})
export class ListcoursesComponent implements OnInit {

  users: User[];
  courses: Course[];
  actionMessage : string;
  //cenrole: Cenrole;

  constructor(private router : Router, private apiService : ApiService) { }

  ngOnInit() {
    this.actionMessage ='';
    this.apiService.getAllCourses()
      .subscribe( data => {
        console.log("************ courses list "+JSON.stringify(data));
        this.courses = data;
      });
  }

 
  enroleCourse(course: Course) {
    this.actionMessage = '';
    var cenrole : Cenrole ={
      id:0,
      cname : course.cname,
      sname : localStorage.getItem('name'),
      edate : new Date()
    } ;
    // = <Cenrole>{};
  
    // var cenrole = {
    //   cname: course.cname,
    //   sname: localStorage.getItem('name'),
    //   edate: new Date()
    // };
   console.log("************ Cenrole "+cenrole);
    //this.cenrole.sid = localStorage.getItem("sid");
    if (localStorage.getItem("sid") ==null)
       this.router.navigate(['login']);
    this.apiService.enroleCourse(cenrole).subscribe ( data => {
      console.log("************ Course enroled "+JSON.stringify(data));
      this.actionMessage = 'Successfully enroled course';
    })
    //this.router.navigate(['edit-jobseeker']);
  };

  addCourse(): void {
    this.router.navigate(['add-jobseeker']);
  };
  
}
