import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService } from './services/apiservice';


import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';    
import { ToastrModule } from 'ngx-toastr'; 
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotificationComponent } from './notification/notification.component';

import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { EditstudentComponent } from './editstudent/editstudent.component';
import { AddcourseadminComponent } from './addcourseadmin/addcourseadmin.component';
import { EditcourseadminComponent } from './editcourseadmin/editcourseadmin.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { EditcourseComponent } from './editcourse/editcourse.component';
import { ListcoursesComponent } from './listcourses/listcourses.component';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';
import { CourseenrolementsComponent } from './courseenrolements/courseenrolements.component';
import { PagenoutfoundComponent } from './pagenoutfound/pagenoutfound.component';
import { ListcourseenrolementsComponent } from './listcourseenrolements/listcourseenrolements.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { RegsuccessComponent } from './regsuccess/regsuccess.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NotificationComponent,
    ChangepasswordComponent,
    AddstudentComponent,
    EditstudentComponent,
    AddcourseadminComponent,
    EditcourseadminComponent,
    AddcourseComponent,
    EditcourseComponent,
    ListcoursesComponent,
    CoursedetailsComponent,
    CourseenrolementsComponent,
    PagenoutfoundComponent,
    ListcourseenrolementsComponent,
    RegisteruserComponent,
    RegsuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ToastrModule.forRoot({
    "countDuplicates" : false,
    "closeButton": true,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-top-right",
  "preventDuplicates": false,
}),




  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
