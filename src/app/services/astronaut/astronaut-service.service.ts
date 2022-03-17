import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {  Observable } from "rxjs";
import { IAstronautDetailModel } from "src/app/models/launch/astronautDetail.model";

@Injectable({
    providedIn:'root'
})
export class AstronautService {

        constructor(private http:HttpClient){}

        private astronautURL:string='https://lldev.thespacedevs.com/2.2.0/astronaut/';

        getAstronautDetailsById(id:number):Observable<IAstronautDetailModel>{
            return this.http.get<IAstronautDetailModel>(`${this.astronautURL}${id}`);    
        }
}