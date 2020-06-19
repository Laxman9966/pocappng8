import { Injectable } from '@angular/core';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { map } from "rxjs/operators"; 
//import { environment } from 'src/environments/environment';

import { User } from '../model/user';
import { Student } from '../model/student';
import { CourseAdmin } from '../model/courseadmin';
import {Course} from "../model/course";

@Injectable()
export class ApiservicesService {

  baseUrl: string =  'http://localhost:8080';

  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    public activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

ngOnInit() {

}
  apiList = {
     addStudent: 'student/addEmployer',
     editStudent: 'student/updateEmployer',
     addCourseAdmin: 'courseadmin/getEmployers',
     editCourseAdmin: 'courseadmin/getEmployerDetails',
     addCourse: 'courseadmin/getjobdetails',
     editCourse: '/courseadmin/getAlljobs',
    listCourseEnrolementts: '/courseadmin/saveJobSeeker',
    listCourses: '/courseadmin/getAllProfiles',
    getCourseByName: 'courseadmin/getCourseByName',
    userLogin : '/users/getProfileDetails',
    pageNotFound: '/users/updateProfileStudent',
    loginUrl: 'users/userlogin',
    changePassword: 'user/login',
}


addStudent(student: Student) {
  return this.post_service(this.apiList.addStudent, student );

}
updateStudent(student: Student) {
  return this.put_service(this.apiList.editStudent, student );
}

addCourseAdmin(courseAdmin: CourseAdmin) {
  return this.post_service(this.apiList.addStudent, courseAdmin );
}

addCourse(course: Course) : Observable<Course> {
  return <Observable<Course>> this.post_service(this.apiList.addStudent, course );
}

saveEmployer(user: Course) {
 // return this.apiservice.post_service(ApiServices.employerApiList.saveEmployer, user);
 return this.post_service(this.apiList.addStudent, user );
}


getAllCourses():Observable<Course[]>  {
  return <Observable<Course[]>> this.get_service(this.apiList.listCourses);
}

serachCourse(course : string) : Observable<Course[]> {
  return <Observable<Course[]>>this.get_service(this.apiList.getCourseByName +'?courseName='+course);
}


getUsers() {
  /* let fakeUsers = [{id: 1, firstName: 'Dhiraj', lastName: 'Ray', email: 'dhiraj@gmail.com'},
   {id: 1, firstName: 'Tom', lastName: 'Jac', email: 'Tom@gmail.com'},
   {id: 1, firstName: 'Hary', lastName: 'Pan', email: 'hary@gmail.com'},
   {id: 1, firstName: 'praks', lastName: 'pb', email: 'praks@gmail.com'},
 ];
 return Observable.of(fakeUsers).delay(5000);*/
 // return this.http.get<User[]>(this.baseUrl);

 return this.get_service(this.apiList.listCourses);
 //  this.http.get<User[]>(this.baseUrl);
 
}

post_service(url : string, data : any) {
  console.log(' post_service @@@@@   URL ' + url);
    var localStorageVariable = '';
    if (localStorage.getItem('authToken')) {
      localStorageVariable = localStorage.getItem('authToken');
    }
    let headerJson = {
      'Content-Type': 'application/json',
      'Authorization': localStorageVariable
    };
    const httpOptions = {
      headers: new HttpHeaders(headerJson)
    };

//     return this.http.get('http://localhost/ionicapis/public/api/products')
//  .pipe(map(res => res.json()));

    // return this.http.post(this.baseUrl + url, data, httpOptions).pipe(map (data =>{})).subscribe((response) => {
    //   return response;
    // }).catch(this.handleError);
    return this.http.post(this.baseUrl + url, data, httpOptions)
      .pipe(map(res =>  {return res}));
  }


  put_service(url : string, data : any) {
    console.log('@@@@@   URL ' + url);
      var localStorageVariable = '';
      if (localStorage.getItem('authToken')) {
        localStorageVariable = localStorage.getItem('authToken');
      }
      let headerJson = {
        'Content-Type': 'application/json',
        'Authorization': localStorageVariable
      };
      const httpOptions = {
        headers: new HttpHeaders(headerJson)
      };
  
      return this.http.put(this.baseUrl + url, data, httpOptions)
      .pipe(map(response => {return response} ));
      //.catch(this.handleError);
  
    }


  get_service(url : string) {

    var localStorageVariable = '';
    if (localStorage.getItem('authToken')) {
      localStorageVariable = localStorage.getItem('authToken');
    }
    let headerJson = {
      'Content-Type': 'application/json',
      'Authorization': localStorageVariable
    };
    const httpOptions = {
      headers: new HttpHeaders(headerJson)
    };

    return this.http.get(this.baseUrl + url, httpOptions).pipe(map(response => {return response }));
    //.catch(this.handleError);

    //https://stackoverflow.com/questions/48837692/type-observableobject-is-not-assignable-to-type-observableiuser
  }


  private handleError(errorObj: HttpErrorResponse | any) {
    const _self = this;
    let errorMessage: string;
    let body: any;

    // check whether we are connected to the internet not using navigator online
    if (navigator.onLine) {
      if (errorObj instanceof HttpErrorResponse) {
        if ((errorObj.ok === false && errorObj.status === 0)) {
          errorMessage = 'Site is Under Maintenance. Please try again after sometime.';
          // $("#siteDownModal").modal('show');
        } else if (errorObj.status === 500) {
          errorMessage = "Something went wrong from server side.. Please try again later", "Error!";
        }
        else if (errorObj.status == 403 || errorObj.status == 401) {
          localStorage.setItem("authToken", '');
          localStorage.setItem("role", "");
          localStorage.setItem("sourceID", "");
          localStorage.setItem("userMenu", "");
          localStorage.setItem("userName", "");
          //  this.router.navigateByUrl('/');
          if (errorObj.error.message == 'Invalid credentials !') {
            errorMessage = errorObj.error.message;
          } else {
            errorMessage = "User unauthorized or Token Expired", "Error!";
            setTimeout(() => {
              window.location.href = "/";
            }, 600);

          }


        }
        else {
          body = errorObj.error || '';
          errorMessage = body.message;
          if (body.status === 101 || body.status === 107 || body.status === 500 || body.status === 403 || body.message === 'Session Expired') {
            //this.toastr.error(errorMessage, "Error!");
          }
        }
      }
    } else {
      errorMessage = "No internet connection..Please try again after sometime!!"
    }
    return Observable.throw(errorMessage);
  }



}
