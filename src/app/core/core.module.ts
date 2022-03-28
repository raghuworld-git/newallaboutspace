import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";

import { LoaderInterceptor } from "./interceptor/loader.interceptor";

import { HeaderComponent } from "./components/header/header.component";
import { SpinnerComponent } from "./components/spinner/spinner.component";


@NgModule({    
    declarations:[
        HeaderComponent,
        SpinnerComponent
    ],
    exports:[
        HeaderComponent,
        SpinnerComponent
    ],
    providers: [{
        provide:HTTP_INTERCEPTORS,
        useClass:LoaderInterceptor,
        multi:true
      }],
})
export class CoreModule {

}