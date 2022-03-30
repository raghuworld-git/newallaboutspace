import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LaunchInfoModel } from 'src/app/shared/models/launch/launchInfo.model';
import { LaunchService } from '../../../../../core/services/launch/launch-service.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent implements OnInit, OnDestroy {

  constructor(
    private launchService: LaunchService,
  ) { }

  launchList: LaunchInfoModel[] = [];

  private launchServiceSubscription!: Subscription;

  ngOnInit(): void {
    this.getlaunchesByType();
  }

  ngOnDestroy(): void {
    this.launchServiceSubscription?.unsubscribe();
  }

  private getlaunchesByType(filterType: string = "") {    
    this.launchServiceSubscription = this.launchService.getUpcomingLaunches(filterType)
      .subscribe(data => {
        this.launchList = data;
      });

  }

}
