import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { LaunchDetailModel } from 'src/app/models/launch/launchDetail.model';
import { LaunchService } from 'src/app/services/launch/launch-service.service';

@Component({
  selector: 'app-launch-detail',
  templateUrl: './launch-detail.component.html',
  styleUrls: ['./launch-detail.component.css']
})
export class LaunchDetailComponent implements OnInit,OnDestroy {

  constructor(private router:ActivatedRoute,private launchService:LaunchService) { }

  slug!:string|null;

  launchDetails!:LaunchDetailModel;

  private launchServiceSubscription!:Subscription;

  ngOnInit(): void {
    this.router.paramMap.subscribe((params:ParamMap)=>{
      this.slug=params.get("slug");

     this.launchServiceSubscription = this.launchService.getlaunchDetailsBySlug(this.slug!)
     .subscribe(data=>{
        this.launchDetails=data;
      })
    })
  }

  ngOnDestroy():void{
    this.launchServiceSubscription?.unsubscribe();
  }

}
