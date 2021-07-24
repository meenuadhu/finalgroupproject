import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PartnershipComponent } from './partnership/partnership.component';
import { PartnershipformComponent } from './partnershipform/partnershipform.component';
import { AcademicmembershipComponent } from './academicmembership/academicmembership.component';
import { CorporatemembershipComponent } from './corporatemembership/corporatemembership.component';
import { CorporatemembershipcontactusformComponent } from './corporatemembershipcontactusform/corporatemembershipcontactusform.component';
import { CorporatemembershipregisternowformComponent } from './corporatemembershipregisternowform/corporatemembershipregisternowform.component';
import {MembershipService} from './membershipservice.service';
import { ViewacademicmembersComponent } from './viewacademicmembers/viewacademicmembers.component';
import { AboutComponent } from './about/about.component';
import { TeamListComponent } from './team-list/team-list.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CoursesComponent } from './courses/courses.component';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';
// import { Course1Component } from './admin/course1/course1.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PartnershipComponent,
    PartnershipformComponent,
    AcademicmembershipComponent,
    CorporatemembershipComponent,
    CorporatemembershipcontactusformComponent,
    CorporatemembershipregisternowformComponent,
    ViewacademicmembersComponent,
    AboutComponent,
    TeamListComponent,
    CoursesComponent,
    CoursedetailsComponent,
    // Course1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CarouselModule
  ],
  providers: [MembershipService],
  bootstrap: [AppComponent]
})
export class AppModule { }
