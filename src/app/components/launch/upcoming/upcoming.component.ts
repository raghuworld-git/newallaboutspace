import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { LaunchInfoModel } from 'src/app/models/launch/launchInfo.model';
import { LaunchService } from 'src/app/services/launch/launch-service.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent implements OnInit,OnDestroy {

  constructor(
    private router:ActivatedRoute , 
    private launchService:LaunchService
    ) { }

    launchList:LaunchInfoModel[]=[];  

    private launchServiceSubscription!:Subscription;


  ngOnInit(): void {
    this.router.paramMap.subscribe((params:ParamMap)=>{
      if(params.get("launchType")==="upcoming"){
        this.launchServiceSubscription = this.launchService.getUpcomingLaunches()
        .subscribe(data=>{
          this.launchList = data;         
        });
      }      
    }) 
  }

  ngOnDestroy():void{ 
    alert('In ngondestory Up')  
    this.launchServiceSubscription?.unsubscribe();    
  }

}
