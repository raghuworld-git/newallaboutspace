import { Injectable } from "@angular/core";
import {  Observable } from "rxjs";
import { IAstronautDetailModel } from "src/app/models/launch/astronautDetail.model";
import { HttpRequestService } from "src/app/shared/services/http-request.service";

@Injectable({
    providedIn:'root'
})
export class AstronautService {

        constructor(private requestService:HttpRequestService){}

        private action:string='astronaut';

        getAstronautDetailsById(id:string):Observable<IAstronautDetailModel>{
            return this.requestService.get<IAstronautDetailModel>(`${this.action}/${id}`);    
        }
}