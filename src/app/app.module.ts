import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DashboardModule } from './features/dashboard/dashboard.module';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent         
  ],
  imports: [
    //Common Modules - Built in    
    BrowserModule,    
    HttpClientModule,
    RouterModule,
       

    // Common Modules - Custom
    AppRoutingModule,
    CoreModule,
    DashboardModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
