import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { ApiService } from '../services/apiservice';
import {first} from "rxjs/operators";
import {Router} from "@angular/router";


@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css']
})
export class RegisteruserComponent implements OnInit {

  constructor(
    private apiService : ApiService, 
    private router : Router , 
    private formBuilder : FormBuilder
    ) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group(
      {
      id: [],
      name: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      usertype: ['', Validators.required]
    }
    );
  }

  onSubmit() {
    this.apiService.registerUser(this.addForm.value).subscribe( data => {
        console.log("************ add Course addCourse "+JSON.stringify(data));
        this.router.navigate(['reg-success']);
      });
  }


}
