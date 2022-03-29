import { NgModule } from "@angular/core";

import { LaunchesRoutingModule } from "./launches-routing.module";
import { SharedModule } from "src/app/shared/shared.module";

import { UpcomingComponent } from './components/launches-container/upcoming/upcoming.component';
import { PastComponent } from './components/launches-container/past/past.component';
import { LaunchDetailComponent } from "./components/launch-detail/launch-detail.component";
import { LaunchesContainerComponent } from './components/launches-container/launches-container.component';

@NgModule({
    declarations: [
    UpcomingComponent,
    PastComponent,
    LaunchDetailComponent,
    LaunchesContainerComponent
  ],
  imports:[
    LaunchesRoutingModule,
    SharedModule
  ]
})
export class LaunchesModule {

}