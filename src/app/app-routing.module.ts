import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './guards/auth.guard';
import { LandingComponent } from './landing/landing.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'athlete',
    loadChildren: () => import('./athlete/athlete.module').then(m => m.AthleteModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'activity',
    loadChildren: () => import('./activity/activity.module').then(m => m.ActivityModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LandingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
