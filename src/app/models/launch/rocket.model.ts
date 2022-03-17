import { ISpacecraftStageModel } from "./spacecraft_stage.model";

export interface IRocketModel {
    configuration:{description:string,full_name:string},
    spacecraft_stage:ISpacecraftStageModel,    
}