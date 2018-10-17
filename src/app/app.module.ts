import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer.component';
import { MenuComponent } from './layout/menu/menu.component';
import { Section1Component } from './layout/section1/section1.component';
import { ChildComponent } from './test/child/child.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectionComponent } from './test/projection/projection.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewsComponent } from './news/news.component';
import { LatestComponent } from './news/latest/latest.component';
import { UpcomingComponent } from './news/upcoming/upcoming.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DateViewerComponent } from './date-viewer/date-viewer.component';
import { AuthGuard } from './guards/auth.guard';
import { CheckGuard } from './guards/check.guard';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    Section1Component,
    ChildComponent,
    DashboardComponent,
    ProjectionComponent,
    PageNotFoundComponent,
    NewsComponent,
    LatestComponent,
    UpcomingComponent,
    DateViewerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [AuthGuard, CheckGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
