import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import {environment} from '../../../environments/environment';

import { LaunchInfoModel } from '../../models/launch/launchInfo.model';
import { ILaunchDetailModel } from '../../models/launch/launchDetail.model';
import { IAstronautModel } from 'src/app/models/launch/astronauts.model';
import { HttpRequestService } from 'src/app/shared/services/http-request.service';


@Injectable({
  providedIn: 'root'
})
export class LaunchService  {
  
  constructor(private requestService:HttpRequestService){}

   private launchAction:string='launch'
   private upcomingAction:string=`${this.launchAction}/upcoming`;
   private previousAction:string=`${this.launchAction}/previous`;


   getUpcomingLaunches(params:IQueryParams[]):Observable<LaunchInfoModel[]>{    
     return this.requestService.get<ILaunchesResult>(this.upcomingAction,params).pipe(map((mapdata)=>{
       return mapdata.results
     }));
   }

   getPreviousLaunches(params:IQueryParams[]):Observable<LaunchInfoModel[]>{  
    return this.requestService.get<ILaunchesResult>(this.previousAction,params).pipe(map((mapdata)=>{
      return mapdata.results
    }));
  }

  getlaunchDetailsBySlug(params:IQueryParams[]):Observable<ILaunchDetailModel>{
    return this.requestService.get<ILaunchesResult>(this.launchAction,params)
    .pipe(map((mapdata)=>{      
      return this.loadCustomProperties(mapdata.results[0]);
    }));    
  } 

  private loadCustomProperties(launchDetails:ILaunchDetailModel):ILaunchDetailModel{
      let launchTempData!:ILaunchDetailModel;
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
      else{
        return launchDetails
      }    
      return launchTempData;
  }
}

interface ILaunchesResult {
  results:any  
}

interface IQueryParams {
  name:string,
  value:string
}
