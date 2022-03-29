import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { LaunchInfoModel } from '../../../shared/models/launch/launchInfo.model';
import { ILaunchDetailModel } from '../../../shared/models/launch/launchDetail.model';
import { IAstronautModel } from '../../../shared/models/launch/astronauts.model';
import { HttpRequestService } from '../http/http-request.service';
import { LaunchUtilService } from './launchUtil.service';


@Injectable({
  providedIn:'root'
})
export class LaunchService  {
  
  constructor(
    private requestService:HttpRequestService,
    private launchUtil : LaunchUtilService
    ){}

   private launchAction:string='launch'
   private upcomingAction:string=`${this.launchAction}/upcoming`;
   private previousAction:string=`${this.launchAction}/previous`;


   getUpcomingLaunches(filterType:string):Observable<LaunchInfoModel[]>{      
    let params:IQueryParams[]=[];
    params.push({ name: 'mode', value: 'detailed' });
    params.push({ name: 'hide_recent_previous', value: 'true' }); 

    if(filterType==='is_crewed'){
      params.push({ name: 'is_crewed', value: 'true' });
    }
     return this.requestService.get<ILaunchesResult>(this.upcomingAction,params).pipe(map((mapdata)=>{
       return this.populateLaunchListCustomProperties(mapdata.results);
     }));
   }

   getPreviousLaunches(filterType:string):Observable<LaunchInfoModel[]>{  
    let params:IQueryParams[]=[];
    params.push({ name: 'mode', value: 'detailed' });
    params.push({ name: 'hide_recent_previous', value: 'true' });
        
    if(filterType==='is_crewed'){
      params.push({ name: 'is_crewed', value: 'true' });
    }

    return this.requestService.get<ILaunchesResult>(this.previousAction,params).pipe(map((mapdata)=>{
      return this.populateLaunchListCustomProperties(mapdata.results);
    }));
  }

  

  getlaunchDetailsBySlug(slug:string):Observable<ILaunchDetailModel>{    
    let queryParams:{name:string,value:string}[]=[];
    queryParams.push({name:'slug',value:slug});
    queryParams.push({name:'mode',value:'detailed'});    
    return this.requestService.get<ILaunchesResult>(this.launchAction,queryParams)
    .pipe(map((mapdata)=>{      
      return this.populateCustomProperties(mapdata.results[0]);
    }));    
  } 

  private populateCustomProperties(launchDetails:ILaunchDetailModel):ILaunchDetailModel{
      let launchTempData:ILaunchDetailModel={...launchDetails};
      let crewMembers:IAstronautModel[]=[];
      if(launchDetails.rocket.spacecraft_stage!=null){          
          launchDetails.rocket.spacecraft_stage.landing_crew.map((crew)=>{                                     
            crewMembers.push({role:crew.role,astronaut:crew.astronaut});   
          })
          crewMembers.forEach((crew)=>{
            crew.crewGroup?.push('landingCrew');
          })
          launchDetails.rocket.spacecraft_stage.launch_crew.map((crew)=>{
             if(!crewMembers.some(crewFilter=>crew.astronaut.id===crew.astronaut.id)){
              crewMembers.push({role:crew.role,astronaut:crew.astronaut});  
             }            
          })
          crewMembers.forEach((crew)=>{
            crew.crewGroup?.push('launchCrew');
          })
          launchDetails.rocket.spacecraft_stage.onboard_crew.map((crew)=>{
            if(!crewMembers.some(crewFilter=>crewFilter.astronaut.id===crew.astronaut.id)){
              crewMembers.push({role:crew.role,astronaut:crew.astronaut});  
             } 
          })
          crewMembers.forEach((crew)=>{
            crew.crewGroup?.push('onboardCrew');
          })
          crewMembers.forEach((crew)=>{
            crew.astronaut.profile_image = crew.astronaut.profile_image == null ? "../../assets/images/astronaut.svg" : crew.astronaut.profile_image;
          })
          launchTempData= {...launchDetails,customCrewMembers:crewMembers}
      }
      
      launchTempData.statusColor = this.launchUtil.getBadgeColor(launchTempData.status.abbrev)
        
     launchTempData.vidURLCustom = launchTempData.vidURLs.length > 0 ? this.launchUtil.createYoutubeEmbedURL(launchTempData.vidURLs[0].url) : null;

      return launchTempData;
  }

  private  populateLaunchListCustomProperties (launchesList : LaunchInfoModel[]):LaunchInfoModel[]{
      let data=launchesList;
      
      data.forEach((launches)=>{
        launches.statusColor = this.launchUtil.getBadgeColor(launches.status.abbrev)
      }); 
      
      return data;
  }
}

interface ILaunchesResult {
  results:any  
}

interface IQueryParams {
  name:string,
  value:string
}
