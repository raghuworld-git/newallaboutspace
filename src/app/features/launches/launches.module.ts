import { NgModule } from "@angular/core";

import { UpcomingComponent } from './components/upcoming/upcoming.component';
import { PastComponent } from './components/past/past.component';
import { LaunchesRoutingModule } from "./launches-routing.module";
import { SharedModule } from "src/app/shared/shared.module";
import { LaunchService } from "src/app/core/services/launch/launch-service.service";
import { LaunchDetailComponent } from "./components/launch-detail/launch-detail.component";

@NgModule({
    declarations: [
    UpcomingComponent,
    PastComponent,
    LaunchDetailComponent
  ],
  imports:[
    LaunchesRoutingModule,
    SharedModule
  ],
  providers:[
    LaunchService
  ]
})
export class LaunchesModule {

}