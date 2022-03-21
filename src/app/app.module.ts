import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LaunchesComponent } from './components/launch/launches/launches.component';
import { LaunchDetailComponent } from './components/launch/launch-detail/launch-detail.component';
import { SingleLaunchCardComponent } from './components/launch/single-launch-card/single-launch-card.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { AstronautDetailComponent } from './components/astronauts/astronaut-detail/astronaut-detail.component';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { LoaderInterceptor } from './shared/interceptor/loader.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LaunchesComponent,
    LaunchDetailComponent,
    SingleLaunchCardComponent,
    HeaderComponent,
    AstronautDetailComponent,
    SpinnerComponent
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
