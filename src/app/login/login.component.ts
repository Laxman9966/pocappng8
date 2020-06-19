import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ApiservicesService } from '../services/apiservices.service';


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
    private apiService: ApiservicesService
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
      this.loading=true;
      if (this.signinForm.invalid) {
        return;
      }
      this.errorMessage="";
      localStorage.setItem('currentUser', "");
      this.submitted=true;
      var user={
        username: this.signinForm.value.username,
        password: this.signinForm.value.password,
        userType: this.signinForm.value.userType
      };
      console.log("*******form signinForm "+JSON.stringify(this.signinForm.value));
      console.log("*******form user "+JSON.stringify(user));
      localStorage.setItem('currentUser', this.signinForm.value.username);
      this.loading=false;
  //    this.router.navigate(["/home"]);
      //this.errorMessage="Invalid UserName / Password";
      //this.apiService.
     //  this.apiservice.post_service(ApiServices.apiList.saveJobSeeker, user );

    }

}
