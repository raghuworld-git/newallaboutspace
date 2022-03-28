import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule, Optional, SkipSelf } from "@angular/core";
import { RouterModule } from "@angular/router";

import { HeaderComponent } from "./components/layout/header/header.component";
import { SpinnerComponent } from "./components/spinner/spinner.component";

import { LoaderInterceptor } from "./interceptor/loader.interceptor";

@NgModule({  
    declarations:[
        HeaderComponent,
        SpinnerComponent
    ]   ,
    providers: [{
        provide:HTTP_INTERCEPTORS,
        useClass:LoaderInterceptor,
        multi:true
      }],
      imports:[
        RouterModule
      ],
      exports:[
          HeaderComponent,
          SpinnerComponent
      ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() core:CoreModule ){
        if (core) {
            throw new Error("You should import core module only in the root module")
        }
    }

}