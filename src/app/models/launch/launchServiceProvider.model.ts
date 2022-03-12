export class LaunchServiceProviderModel {
    constructor(
        public id:number,
        public name:string,
        public type:string| null,
        public country_code: string,
        public abbrev:string,
        public description: string | null,
        public administrator : string | null,
        public founding_year : string | null,
        public launchers : string,
        public spacecraft :string,
        public info_url:string | null,
        public wiki_url : string | null,
        public logo_url : string | null,
        public image_url : string | null,
        public nation_url : string | null
    ){}
}