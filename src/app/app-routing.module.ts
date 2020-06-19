import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


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


const routes: Routes = [
  
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'notification', component: NotificationComponent},

  {path: 'register-user', component: RegisteruserComponent},
  {path: 'changepassword', component: ChangepasswordComponent},
  
  {path: 'add-student', component: AddstudentComponent},
  {path: 'add-courseadmin', component: AddcourseadminComponent},
  {path: 'edit-courseadmin', component: EditcourseadminComponent},

  {path: 'add-course', component: AddcourseComponent},
  {path: 'edit-course', component: EditcourseComponent},
  {path: 'list-courses', component: ListcoursesComponent},
  {path: 'course-details', component: CoursedetailsComponent},
  {path: 'list-course-enrolements', component: ListcourseenrolementsComponent},

  {path: 'page-notfound', component: PagenoutfoundComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
