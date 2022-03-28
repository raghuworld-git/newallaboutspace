import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LaunchDetailComponent } from "./components/launch-detail/launch-detail.component";

import { PastComponent } from "./components/past/past.component";
import { UpcomingComponent } from "./components/upcoming/upcoming.component";


const routes:Routes=[
            {path:'upcoming',component:UpcomingComponent},
            {path:'previous',component:PastComponent}   ,
            {path:'launchdetail/:slug',component:LaunchDetailComponent} 
            ///launchdetail/new-shepard-ns-20
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class LaunchesRoutingModule {

}