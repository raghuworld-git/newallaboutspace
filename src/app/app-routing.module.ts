import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AstronautDetailComponent } from './components/astronauts/astronaut-detail/astronaut-detail.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LaunchDetailComponent } from './components/launch/launch-detail/launch-detail.component';
import { LaunchesComponent } from './components/launch/launches/launches.component';

const routes: Routes = [
  { path:'dashboard',component:DashboardComponent},  
  { path:'launches/:launchType',component:LaunchesComponent},
  { path:'launchdetail/:slug',component:LaunchDetailComponent},
  {path :'astronaut/:id',component:AstronautDetailComponent},
  { path:'',redirectTo:'/dashboard',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
