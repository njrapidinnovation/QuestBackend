export enum TypeOfProperty{

    SingleFamilyResidence,
    MultiFamilyResidence,
    DevelopingLand,
    Commercial,
    RawLand
}


export interface propertData{
    id:string
    Fname:string
    Lname:string
    Email:string
    PublicAddress:string
    PropertyType:TypeOfProperty
    PropertyName:string
    CurrentValue:number
    Comments:string
    YearBuilt:Date
    Zoning:string
    Landscaping:string
    Lotfacts:number
    Address1:string
    Address2:string
    City:string
    State:string
    PostalCode:number
    SchoolDistrict:string
    Elementary:string
    JrHigh:string
    HighSchool:string
    Insurance:number
    Maintenance:number
    HOAFees:number
    Amenties:number
    AC:number
    Roof:number
    Floor:number
    WindowCovering:number
    Pool:number
    PoolFeature:number
    Style:number
    Deck:number
    Patio:number
    Garage:number
    Carpot:number
    ParkignSpace:number
    FinBasmt:number
    Basement:number
    Driveway:number
    Water:number
    WaterShare:number
    Spa:number
}