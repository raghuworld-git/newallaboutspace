import { Component, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
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
    private sanitizer: DomSanitizer,
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

      this.launchServiceSubscription = this.launchService.getlaunchDetailsBySlug(this.slug!)
        .subscribe({
          next: data => {
            this.launchDetails = data;
            this.videoURL = data.vidURLs.length > 0 ? this.createYoutubeEmbedURL(data.vidURLs[0].url) : null;
          },
          error: err => {
            console.log(err, "error in launc-detail component");
          }
        })
    })
  }

  ngOnDestroy(): void {
    this.launchServiceSubscription?.unsubscribe();
  }

  private createYoutubeEmbedURL(url: string | null): SafeResourceUrl | null {
    if (url != null || url != "") {

      let tempURLArray = url!.split("watch?v=");
      if (tempURLArray === undefined || tempURLArray === null || tempURLArray.length <= 1) {
        return null;
      }
      else {
        return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${tempURLArray[1].toString()}`);
      }
    }
    else {
      return null;
    }
  }

}
