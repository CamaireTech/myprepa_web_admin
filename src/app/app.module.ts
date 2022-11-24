import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

// layouts
import { AdminComponent } from "./layouts/admin/admin.component";
import { AuthComponent } from "./layouts/auth/auth.component";

// admin views
import { DashboardComponent } from "./views/admin/dashboard/dashboard.component";
import { MapsComponent } from "./views/admin/papers/papers.component";
import { SettingsComponent } from "./views/admin/school/school.component";
import { TablesComponent } from "./views/admin/exams/exams.component";

// auth views
import { LoginComponent } from "./views/auth/login/login.component";

// components for views and layouts

import { AdminNavbarComponent } from "./components/navbars/admin-navbar/admin-navbar.component";
import { AuthNavbarComponent } from "./components/navbars/auth-navbar/auth-navbar.component";
import { CardBarChartComponent } from "./components/cards/card-bar-chart/card-bar-chart.component";
import { CardLineChartComponent } from "./components/cards/card-line-chart/card-line-chart.component";
import { CardPageVisitsComponent } from "./components/cards/card-page-visits/card-page-visits.component";
import { CardSocialTrafficComponent } from "./components/cards/card-social-traffic/card-social-traffic.component";
import { CardStatsComponent } from "./components/cards/card-stats/card-stats.component";
import { CardTableComponent } from "./components/cards/card-table/card-table.component";
import { FooterAdminComponent } from "./components/footers/footer-admin/footer-admin.component";
import { FooterComponent } from "./components/footers/footer/footer.component";
import { FooterSmallComponent } from "./components/footers/footer-small/footer-small.component";
import { HeaderStatsComponent } from "./components/headers/header-stats/header-stats.component";
import { IndexNavbarComponent } from "./components/navbars/index-navbar/index-navbar.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { FacultyComponent } from './views/admin/faculty/faculty.component';
import { DomainComponent } from './views/admin/domain/domain.component';
import { SubjectComponent } from './views/admin/subject/subject.component';
import { SessionComponent } from './views/admin/session/session.component';
import { CorrectionComponent } from './views/admin/correction/correction.component';
import { TabSchoolComponent } from './components/tables/tab-school/tab-school.component';
import { TabDomainComponent } from './components/tables/tab-domain/tab-domain.component';
import { TabExamsComponent } from './components/tables/tab-exams/tab-exams.component';
import { TabFacultyComponent } from './components/tables/tab-faculty/tab-faculty.component';
import { TabPapersComponent } from './components/tables/tab-papers/tab-papers.component';
import { TabCorrectionComponent } from './components/tables/tab-correction/tab-correction.component';
import { TabSessionComponent } from './components/tables/tab-session/tab-session.component';
import { TabSubjectComponent } from './components/tables/tab-subject/tab-subject.component';
import { CreateCorrectionComponent } from './views/admin/correction/create-correction/create-correction.component';
import { UsersComponent } from './views/admin/users/users.component';
import { TestimonialComponent } from './views/admin/testimonial/testimonial.component';
import { TabUsersComponent } from './components/tables/tab-users/tab-users.component';
import { TabTestimonialComponent } from './components/tables/tab-testimonial/tab-testimonial.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CardBarChartComponent,
    CardLineChartComponent,
    SidebarComponent,
    FooterComponent,
    FooterSmallComponent,
    FooterAdminComponent,
    CardPageVisitsComponent,
    CardSocialTrafficComponent,
    CardStatsComponent,
    CardTableComponent,
    HeaderStatsComponent,
    AuthNavbarComponent,
    AdminNavbarComponent,
    IndexNavbarComponent,
    AdminComponent,
    AuthComponent,
    MapsComponent,
    SettingsComponent,
    TablesComponent,
    LoginComponent,
    FacultyComponent,
    DomainComponent,
    SubjectComponent,
    SessionComponent,
    CorrectionComponent,
    TabSchoolComponent,
    TabDomainComponent,
    TabExamsComponent,
    TabFacultyComponent,
    TabPapersComponent,
    TabCorrectionComponent,
    TabSessionComponent,
    TabSubjectComponent,
    CreateCorrectionComponent,
    UsersComponent,
    TestimonialComponent,
    TabUsersComponent,
    TabTestimonialComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule, 
    AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
