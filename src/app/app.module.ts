import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { DashboardModule } from './modules/dashboard/dashboard.module';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { LaunchesComponent } from './components/launch/launches/launches.component';
import { LaunchDetailComponent } from './components/launch/launch-detail/launch-detail.component';
import { SingleLaunchCardComponent } from './components/launch/single-launch-card/single-launch-card.component';
import { AstronautDetailComponent } from './components/astronauts/astronaut-detail/astronaut-detail.component';







@NgModule({
  declarations: [
    AppComponent,    
    LaunchesComponent,
    LaunchDetailComponent,
    SingleLaunchCardComponent,    
    AstronautDetailComponent
  ],
  imports: [
    BrowserModule,    
    HttpClientModule,
    RouterModule,

    DashboardModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
