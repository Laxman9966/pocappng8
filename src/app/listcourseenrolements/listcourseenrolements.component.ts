import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/apiservice';
import { Course } from '../model/course';
import { Cenrole } from  '../model/cenrole';

@Component({
  selector: 'app-listcourseenrolements',
  templateUrl: './listcourseenrolements.component.html',
  styleUrls: ['./listcourseenrolements.component.css']
})
export class ListcourseenrolementsComponent implements OnInit {

  courses: Course[];
  cenrolemens: Cenrole[];
  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getAllCourseEnrolements()
      .subscribe( data => {
        console.log("************ Course Enrolements list "+JSON.stringify(data));
        this.cenrolemens = data;
      });
  }

  enroleCourse(user: Course): void {
    localStorage.removeItem("editUserId");
    localStorage.setItem("editUserId", user.id.toString());
    this.router.navigate(['edit-jobseeker']);
  };


}
