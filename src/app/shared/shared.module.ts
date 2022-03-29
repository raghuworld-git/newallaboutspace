import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SingleLaunchCardComponent } from './components/single-launch-card/single-launch-card.component';
import { SingleAstronautComponent } from './components/single-astronaut/single-astronaut.component';

@NgModule({
    

  declarations: [
    SingleLaunchCardComponent,
    SingleAstronautComponent
  ],
  imports:[RouterModule,CommonModule],
  exports:[
      SingleLaunchCardComponent,
      SingleAstronautComponent,
      CommonModule
  ]
})
export class SharedModule {
    
}