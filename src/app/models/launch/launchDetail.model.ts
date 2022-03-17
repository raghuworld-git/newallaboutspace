import { IAstronautModel } from "./astronauts.model";
import { spacecraft_stage } from "./launchInfo.model";
import { ILaunchPadModel } from "./launchPads.model";
import { ILaunchServiceProviderModel } from "./launchServiceProvider.model";
import { ILaunchStatusModel } from "./launchStatus.model";
import { ILaunchUpdatesModel } from "./launchUpdates.model";
import { IVidURL } from "./videoURL.model";

export interface ILaunchDetailModel {   
         name:string,
         image:string,
         status : ILaunchStatusModel,
         updates: ILaunchUpdatesModel[],
         net:string,
         launch_service_provider:ILaunchServiceProviderModel,        
         rocket: {spacecraft_stage:spacecraft_stage},
         customCrewMembers : IAstronautModel[],
         pad:ILaunchPadModel,   
         vidURLs:IVidURL[]
}