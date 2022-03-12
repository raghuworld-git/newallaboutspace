import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LaunchesComponent } from './components/launch/launches/launches.component';
import { LaunchDetailComponent } from './components/launch/launch-detail/launch-detail.component';
import { SingleLaunchCardComponent } from './components/launch/single-launch-card/single-launch-card.component';
import { HeaderComponent } from './components/common/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LaunchesComponent,
    LaunchDetailComponent,
    SingleLaunchCardComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
