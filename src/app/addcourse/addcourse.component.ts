import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { ApiService } from '../services/apiservice';
import {first} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {

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
      cname: ['', Validators.required],
      fee: ['', Validators.required],
      duration: ['', Validators.required],
      sdate: ['', Validators.required],
    }
    );
  }

  onSubmit() {
    this.apiService.addCourse(this.addForm.value).subscribe( data => {
        console.log("************ add Course addCourse "+JSON.stringify(data));
        this.router.navigate(['list-courses']);
      });
  }

}
