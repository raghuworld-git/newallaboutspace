import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SingleLaunchCardComponent } from './components/single-launch-card/single-launch-card.component';
import { SingleAstronautComponent } from './components/single-astronaut/single-astronaut.component';
import { DescriptionCardComponent } from './components/description-card/description-card.component';


@NgModule({
    

  declarations: [
    SingleLaunchCardComponent,
    SingleAstronautComponent,
    DescriptionCardComponent
  ],
  imports:[RouterModule,CommonModule],
  exports:[
      SingleLaunchCardComponent,
      SingleAstronautComponent,
      DescriptionCardComponent,
      CommonModule
  ]
})
export class SharedModule {
    
}