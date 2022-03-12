import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { LaunchInfoModel } from '../models/launch/launchInfo.model';
import { map, Observable } from 'rxjs';
import { LaunchDetailModel } from '../models/launch/launchDetail.model';

@Injectable({
  providedIn: 'root'
})
export class LaunchService {

  constructor(private http:HttpClient){}

   private  launchURL:string='https://lldev.thespacedevs.com/2.2.0/launch/';

   private  upcomingLaunchURL:string=`${this.launchURL}upcoming/`;

   private  previousLaunchURL:string=`${this.launchURL}previous/`;

   getUpcomingLaunches():Observable<LaunchInfoModel[]>{
     return this.http.get<LaunchesResult>(this.upcomingLaunchURL).pipe(map((mapdata)=>{
       return mapdata.results
     }));
   }

   getPreviousLaunches():Observable<LaunchInfoModel[]>{
    return this.http.get<LaunchesResult>(this.previousLaunchURL).pipe(map((mapdata)=>{
      return mapdata.results
    }));
  }

  getlaunchDetailsBySlug(slug:string):Observable<LaunchDetailModel>{
    return this.http.get<LaunchesResult>(`${this.launchURL}?slug=${slug}&mode=detailed`)
    .pipe(map((mapdata)=>{
      return mapdata.results[0] as LaunchDetailModel;
    }));    
  }

}

class LaunchesResult {
  constructor(public results:any){}  
}
