import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule, Optional, SkipSelf } from "@angular/core";
import { RouterModule } from "@angular/router";

import { HeaderComponent } from "./components/layout/header/header.component";
import { SpinnerComponent } from "./components/spinner/spinner.component";

import { LoaderInterceptor } from "./interceptor/loader.interceptor";
import { TimezoneComponent } from './components/timezone/timezone.component';

@NgModule({  
    declarations:[
        HeaderComponent,
        SpinnerComponent,
        TimezoneComponent
    ]   ,
    providers: [{
        provide:HTTP_INTERCEPTORS,
        useClass:LoaderInterceptor,
        multi:true
      }],
      imports:[
        RouterModule,
        CommonModule
      ],
      exports:[
          HeaderComponent,
          SpinnerComponent,
          TimezoneComponent
      ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() core:CoreModule ){
        if (core) {
            throw new Error("You should import core module only in the root module")
        }
    }

}