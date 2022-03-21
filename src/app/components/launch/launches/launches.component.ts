import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { LaunchInfoModel } from 'src/app/models/launch/launchInfo.model';
import { LaunchService } from 'src/app/services/launch/launch-service.service';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.css']
})
export class LaunchesComponent implements OnInit, OnDestroy {

  constructor(private router: ActivatedRoute,
    private launchService: LaunchService) { }

  launchType!: string | null;
  launchList: LaunchInfoModel[] = [];

  private launchServiceSubscription!: Subscription;

  ngOnInit(): void {
    this.router.paramMap.subscribe((params: ParamMap) => {
      this.launchType = params.get("launchType");
      this.getlaunchesByType(this.launchType!);
    })
  }

  ngOnDestroy(): void {
    this.launchServiceSubscription?.unsubscribe();
  }

  private getlaunchesByType(launchType: string, filterType: string = "") {

    let params:{name:string,value:string}[]=[];

    params.push({name:'mode',value:'detailed'});
    params.push({name:'hide_recent_previous',value:'true'});
    if(filterType){
      params.push({name:'is_crewed',value:'true'});
    }

    if (launchType === "upcoming") {
      this.launchServiceSubscription = this.launchService.getUpcomingLaunches(params)
        .subscribe(data => {
          this.launchList = data;
        });
    }
    else if (launchType === "previous") {
      this.launchServiceSubscription = this.launchService.getPreviousLaunches(params)
        .subscribe(data => {
          this.launchList = data;
        });
    }

  }

  onFilterChange(selectEvent: any): void {
    this.getlaunchesByType(this.launchType!, selectEvent.target.value);
  }

}
