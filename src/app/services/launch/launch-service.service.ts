import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { LaunchInfoModel } from '../../models/launch/launchInfo.model';
import { map, Observable } from 'rxjs';
import { ILaunchDetailModel } from '../../models/launch/launchDetail.model';
import { IAstronautModel } from 'src/app/models/launch/astronauts.model';

@Injectable({
  providedIn: 'root'
})
export class LaunchService {

  constructor(private http:HttpClient){}

   private  launchURL:string='https://lldev.thespacedevs.com/2.2.0/launch/';

   private  upcomingLaunchURL:string=`${this.launchURL}upcoming/`;

   private  previousLaunchURL:string=`${this.launchURL}previous/`;

   getUpcomingLaunches(filterType:string=''):Observable<LaunchInfoModel[]>{
     let customisedURL=`${this.upcomingLaunchURL}?mode=detailed&hide_recent_previous=true${this.getCustomisedQueryParams(filterType)}`;     
     return this.http.get<ILaunchesResult>(customisedURL).pipe(map((mapdata)=>{
       return mapdata.results
     }));
   }

   getPreviousLaunches(filterType:string=''):Observable<LaunchInfoModel[]>{
    let customisedURL=`${this.previousLaunchURL}?mode=detailed&hide_recent_previous=true${this.getCustomisedQueryParams(filterType)}`; 
    return this.http.get<ILaunchesResult>(customisedURL).pipe(map((mapdata)=>{
      return mapdata.results
    }));
  }

  getlaunchDetailsBySlug(slug:string):Observable<ILaunchDetailModel>{
    return this.http.get<ILaunchesResult>(`${this.launchURL}?slug=${slug}&mode=detailed`)
    .pipe(map((mapdata)=>{      
      return this.loadCustomProperties(mapdata.results[0]);
    }));    
  }

  private getCustomisedQueryParams(params:string):string{
    if(params=="manned"){
        return "&is_crewed=true"
    }
    return "";
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
