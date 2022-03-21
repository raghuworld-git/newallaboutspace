import { Component, OnDestroy, OnInit } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';

import { ILaunchDetailModel } from 'src/app/models/launch/launchDetail.model';
import { LaunchService } from 'src/app/services/launch/launch-service.service';
import { LaunchUtilService } from 'src/app/services/launch/launchUtil.service';


@Component({
  selector: 'app-launch-detail',
  templateUrl: './launch-detail.component.html',
  styleUrls: ['./launch-detail.component.css']
})
export class LaunchDetailComponent implements OnInit, OnDestroy {

  constructor(
    private router: ActivatedRoute,    
    private launchService: LaunchService,
    public launchUtilService: LaunchUtilService
  ) { }

  slug!: string | null;

  launchDetails!: ILaunchDetailModel;
  videoURL: SafeResourceUrl | null = null;

  private launchServiceSubscription!: Subscription;

  ngOnInit(): void {
    this.router.paramMap.subscribe((params: ParamMap) => {
      this.slug = params.get("slug");
      
      let queryParams:{name:string,value:string}[]=[];
      queryParams.push({name:'slug',value:this.slug!});
      queryParams.push({name:'mode',value:'detailed'});

      this.launchServiceSubscription = this.launchService.getlaunchDetailsBySlug(queryParams)
        .subscribe({
          next: data => {
            this.launchDetails = data;
            this.videoURL = data.vidURLs.length > 0 ? this.launchUtilService.createYoutubeEmbedURL(data.vidURLs[0].url) : null;
          }
        })
    })
  }

  ngOnDestroy(): void {
    this.launchServiceSubscription?.unsubscribe();
  } 

}
