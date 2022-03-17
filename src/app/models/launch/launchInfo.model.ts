import { IAstronautModel } from "./astronauts.model";
import { ILaunchStatusModel } from "./launchStatus.model";
import { ILaunchServiceProviderModel } from "./launchServiceProvider.model";

export interface LaunchInfoModel {   
         slug:string,
         name:string,
         image:string | null,
         status : ILaunchStatusModel,
         net:string,
         launch_service_provider:ILaunchServiceProviderModel,
         rocket: { spacecraft_stage:spacecraft_stage}    
}

export interface spacecraft_stage {    
         destination:string,
         launch_crew :IAstronautModel[],
         onboard_crew : IAstronautModel[],
         landing_crew : IAstronautModel[]        
}