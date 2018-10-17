import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TestComponent } from './test/test.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {NewsComponent} from './news/news.component';
import {LatestComponent} from './news/latest/latest.component';
import {UpcomingComponent} from './news/upcoming/upcoming.component';
import { AuthGuard } from './guards/auth.guard';
import { CheckGuard } from './guards/check.guard';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: DashboardComponent
  },
  {
    path: 'dashboard',
    redirectTo: 'test'
  },
  {
    path: 'news',
    component: NewsComponent,
    canActivateChild: [AuthGuard],
    data: ['ADMIN'],
    children: [
      {
        path: 'latest',
        component: LatestComponent,
        data: ['ADMIN']
      },
      {
        path: 'upcoming',
        component: UpcomingComponent,
        data: ['NO_ADMIN']
      }
    ]
  },
  {
    path: 'test/latest',
    component: TestComponent,
    canDeactivate: [CheckGuard]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
