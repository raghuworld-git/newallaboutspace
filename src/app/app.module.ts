import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LaunchesComponent } from './components/launch/launches/launches.component';
import { LaunchDetailComponent } from './components/launch/launch-detail/launch-detail.component';
import { SingleLaunchCardComponent } from './components/launch/single-launch-card/single-launch-card.component';
import { HeaderComponent } from './components/common/header/header.component';
import { AstronautDetailComponent } from './components/astronauts/astronaut-detail/astronaut-detail.component';
import { SpinnerComponent } from './components/common/spinner/spinner.component';
import { LoaderInterceptor } from './interceptor/loader.interceptor';
import { UpcomingComponent } from './components/launch/upcoming/upcoming.component';
import { PastComponent } from './components/launch/past/past.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LaunchesComponent,
    LaunchDetailComponent,
    SingleLaunchCardComponent,
    HeaderComponent,
    AstronautDetailComponent,
    SpinnerComponent,
    UpcomingComponent,
    PastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:LoaderInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
