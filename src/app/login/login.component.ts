import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ApiService } from '../services/apiservice';
import { User } from '../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signinForm:FormGroup;
  username:string;
  password:string;
  userType:string;
  errorMessage:string;
  loading = false;
  submitted=false;
 // loading:boolean = false;
  //submitted:boolean=false;

  constructor(
    //private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService
    ) {
    }  
  
  ngOnInit() {
    localStorage.setItem('currentUser', "");
    this.signinForm=new FormGroup({
      'username': new FormControl(null,Validators.required),
      'password': new FormControl(null,[Validators.minLength(5),Validators.required]),
      'userType': new FormControl(null, Validators.required)
    });
  }
    //get f() {return this.signinForm.controls;}


    onSubmit() {
      console.log("************ onSubmit ");
      this.loading=true;
      if (this.signinForm.invalid) {
        return;
      }
      this.errorMessage="";
      localStorage.setItem('currentUser', "");
      this.submitted=true;
       //let user = new User();


       var user : User ={
        id:0 ,
        name:'' ,
        username:'',
        password:'',
        usertype:''
      };

      //  var user : User ={
      //    username: this.signinForm.value.username,
      //    password: this.signinForm.value.password,
      //    usertype: this.signinForm.value.userType
      //  };
      user.username =this.signinForm.value.username;
      user.password =this.signinForm.value.password;
      user.usertype =this.signinForm.value.userType;

      console.log("************ add Course addCourse "+JSON.stringify(user));
      localStorage.setItem('currentUser', this.signinForm.value.username);
     

      this.apiService.userSignIn(user).subscribe( data=> {
        console.log("************ add Course addCourse "+JSON.stringify(data));
        this.loading=false;
        localStorage.setItem("sid", data['sid']);
        localStorage.setItem("name", data['name']);
        localStorage.setItem("usertype", data['usertype']);
        
        if(data['usertype']==='Course Admin')
            this.router.navigate(['list-course-enrolements']);
        else     
        this.router.navigate(['list-courses']);
      })
      
      //this.errorMessage="Invalid UserName / Password";
      //this.apiService.
     //  this.apiservice.post_service(ApiServices.apiList.saveJobSeeker, user );

    }

}
