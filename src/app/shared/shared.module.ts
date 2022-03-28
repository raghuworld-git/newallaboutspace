import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SingleLaunchCardComponent } from './components/single-launch-card/single-launch-card.component';

@NgModule({
    

  declarations: [
    SingleLaunchCardComponent
  ],
  imports:[RouterModule,CommonModule],
  exports:[
      SingleLaunchCardComponent,
      CommonModule
  ]
})
export class SharedModule {
    
}