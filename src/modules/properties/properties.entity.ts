import { CreatedModified } from "src/helper";
import { Column, Entity, EntityRepository, PrimaryColumn } from "typeorm";
import { propertData, TypeOfProperty } from "./properties.interface";
@Entity()
export class PropertyEntity extends CreatedModified implements propertData{

    @PrimaryColumn()
    id:string

    @Column()
    Fname:string

    @Column()
    Lname:string

    @Column()
    Email:string
  
    @Column()
    PublicAddress:string

    @Column()
    PropertyType:TypeOfProperty

    @Column()
    PropertyName:string

    @Column()
    CurrentValue:number

    @Column()
    Comments:string

    @Column()
    YearBuilt:Date

    @Column()
    Zoning:string

    @Column()
    Landscaping:string

    @Column()
    Lotfacts:number
    @Column()
    Address1:string    
    @Column()
    Address2:string
    @Column()
    City:string
    @Column()
    State:string
    @Column()
    PostalCode:number
    @Column()
    SchoolDistrict:string
    @Column()
    Elementary:string
    @Column()
    JrHigh:string
    @Column()
    HighSchool:string
    @Column()
    Insurance:number
    @Column()
    Maintenance:number
    @Column()
    HOAFees:number
    @Column()
    Amenties:number
    @Column()
    AC:number
    @Column()
    Roof:number
    @Column()
    Floor:number
    @Column()
    WindowCovering:number
    @Column()
    Pool:number
    @Column()
    PoolFeature:number
    @Column()
    Style:number
    @Column()
    Deck:number
    @Column()
    Patio:number
    @Column()
    Garage:number
    @Column()
    Carpot:number
    @Column()
    ParkignSpace:number
    @Column()
    FinBasmt:number
    @Column()
    Basement:number
    @Column()
    Driveway:number
    @Column()
    Water:number
    @Column()
    WaterShare:number
    @Column()
    Spa:number
    
}