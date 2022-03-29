import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
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
    private router: ActivatedRoute,
    private launchService: LaunchService,
    private renderer: Renderer2
  ) { }

  launchList: LaunchInfoModel[] = [];

  private launchServiceSubscription!: Subscription;

  ngOnInit(): void {
    this.getlaunchesByType();
  }

  ngOnDestroy(): void {
    this.launchServiceSubscription?.unsubscribe();
  }

  onFilterChange(selectEvent: any): void {
    this.getlaunchesByType(selectEvent.target.value);
  }

  private getlaunchesByType(filterType: string = "") {    
    this.launchServiceSubscription = this.launchService.getUpcomingLaunches(filterType)
      .subscribe(data => {
        this.launchList = data;
      });

  }

}
