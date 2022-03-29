import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LaunchDetailComponent } from "./components/launch-detail/launch-detail.component";
import { LaunchesContainerComponent } from "./components/launches-container/launches-container.component";

import { PastComponent } from "./components/launches-container/past/past.component";
import { UpcomingComponent } from "./components/launches-container/upcoming/upcoming.component";


const routes:Routes=[
            {
                path:'', component:LaunchesContainerComponent ,
                children:[
                    {path:'upcoming',component:UpcomingComponent , data:{type:'upcoming'}},
                    {path:'previous',component:PastComponent, data:{type:'upcoming'}}                     
                ]                
            } ,
            {path:'launchdetail/:slug',component:LaunchDetailComponent}                    
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class LaunchesRoutingModule {

}