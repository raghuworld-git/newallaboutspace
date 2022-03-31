import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DashboardModule } from './features/dashboard/dashboard.module';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent         
  ],
  imports: [
    //Common Modules - Built in    
    BrowserModule,    
    HttpClientModule,
    RouterModule,
    FormsModule,
       

    // Common Modules - Custom
    AppRoutingModule,
    CoreModule,
    DashboardModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
