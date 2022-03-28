import { IAstronautModel } from "./astronauts.model";
import { ILaunchPadModel } from "./launchPads.model";
import { ILaunchServiceProviderModel } from "./launchServiceProvider.model";
import { ILaunchStatusModel } from "./launchStatus.model";
import { ILaunchUpdatesModel } from "./launchUpdates.model";
import { IRocketModel } from "./rocket.model";
import { IVidURL } from "./videoURL.model";

export interface ILaunchDetailModel {   
         name:string,
         image:string,
         status : ILaunchStatusModel,
         updates: ILaunchUpdatesModel[],
         net:string,
         launch_service_provider:ILaunchServiceProviderModel,        
         rocket: IRocketModel,
         customCrewMembers : IAstronautModel[],
         pad:ILaunchPadModel,   
         vidURLs:IVidURL[]
}