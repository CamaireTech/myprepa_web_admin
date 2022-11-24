 import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// layouts
import { AdminComponent } from "./layouts/admin/admin.component";
import { AuthComponent } from "./layouts/auth/auth.component";

// admin views
import { DashboardComponent } from "./views/admin/dashboard/dashboard.component";
import { MapsComponent } from "./views/admin/papers/papers.component";
import { SettingsComponent } from "./views/admin/school/school.component";
import { TablesComponent } from "./views/admin/exams/exams.component";
import { FacultyComponent } from "./views/admin/faculty/faculty.component";
import { CorrectionComponent } from "./views/admin/correction/correction.component";
import { DomainComponent } from "./views/admin/domain/domain.component";
import { SessionComponent } from "./views/admin/session/session.component";
import { SubjectComponent } from "./views/admin/subject/subject.component";
import { UsersComponent } from "./views/admin/users/users.component";
import { TestimonialComponent } from "./views/admin/testimonial/testimonial.component";

//tables
import { TabCorrectionComponent } from "./components/tables/tab-correction/tab-correction.component";
import { TabDomainComponent } from "./components/tables/tab-domain/tab-domain.component";
import { TabExamsComponent } from "./components/tables/tab-exams/tab-exams.component";
import { TabFacultyComponent } from "./components/tables/tab-faculty/tab-faculty.component";
import { TabPapersComponent } from "./components/tables/tab-papers/tab-papers.component";
import { TabSchoolComponent } from "./components/tables/tab-school/tab-school.component";
import { TabSessionComponent } from "./components/tables/tab-session/tab-session.component";
import { TabSubjectComponent } from "./components/tables/tab-subject/tab-subject.component";

// auth views
import { LoginComponent } from "./views/auth/login/login.component";

const routes: Routes = [
  // admin views
  {
    path: "admin",
    component: AdminComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "school", component: SettingsComponent },
      { path: "exams", component: TablesComponent },
      { path: "papers", component: MapsComponent },
      { path: "faculty", component: FacultyComponent },
      { path: "correction", component: CorrectionComponent },
      { path: "domain", component: DomainComponent },
      { path: "session", component: SessionComponent },
      { path: "subject", component: SubjectComponent },
      { path: "user", component: UsersComponent},
      { path: "testimonial", component: TestimonialComponent},
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
    ],
  },

 /* { path: "tabcorrection", component: TabCorrectionComponent, },
   { path: "tabdomain", component: TabDomainComponent,},
    {path: "tabexams", component: TabExamsComponent,},
    {path: "tabfac", component: TabFacultyComponent,},
    {path: "tabpapers", component: TabPapersComponent,},
    {path: "tabschool", component: TabSchoolComponent,},
    {path: "tabsession", component: TabSessionComponent,},
    {path: "tabsub", component: TabSubjectComponent},*/

  // auth views
  {
    path: "auth",
    component: AuthComponent,
    children: [
      { path: "login", component: LoginComponent },
      { path: "", redirectTo: "login", pathMatch: "full" },
    ],
  },
  // no layout views
  { path: "", component: LoginComponent },
  { path: "", redirectTo: "login", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
