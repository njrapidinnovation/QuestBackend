import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsEmail, IsEnum, IsNumber, isString, IsString } from "class-validator";
import { isUuid } from "uuidv4";
import { TypeOfProperty } from "./properties.interface";

export class propertyDto{
    @ApiProperty()
    @IsString()
    id:string

    @ApiProperty()
    @IsString()
    Fname:string

    @ApiProperty()
    @IsString()
    Lname:string

    @ApiProperty()
    @IsEmail()
    Email:string

    @ApiProperty()
    @IsString()
    PublicAddress:string

    @ApiProperty()
    @IsEnum(TypeOfProperty)
    PropertyType:TypeOfProperty

    @ApiProperty()
    @IsString()
    PropertyName:string

    @ApiProperty()
    @IsNumber()
    CurrentValue:number

    @ApiProperty()
    @IsString()
    Comments:string

    @ApiProperty()
    @IsDate()
    YearBuilt:Date

    @ApiProperty()
    @IsString()
    Zoning:string

    @ApiProperty()
    @IsString()
    Landscaping:string

    @ApiProperty()
    @IsNumber()
    Lotfacts:number

    @ApiProperty()
    @IsString()
    Address1:string

    @ApiProperty()
    @IsString()
    Address2:string

    @ApiProperty()
    @IsString()
    City:string

    @ApiProperty()
    @IsString()
    State:string
    
    @ApiProperty()
    @IsNumber()
    PostalCode:number

    @ApiProperty()
    @IsNumber()
    SchoolDistrict:string

    @ApiProperty()
    @IsString()
    Elementary:string

    @ApiProperty()
    @IsString()
    JrHigh:string

    @ApiProperty()
    @IsString()
    HighSchool:string

    @ApiProperty()
    @IsNumber()
    Insurance:number

    @ApiProperty()
    @IsNumber()
    Maintenance:number

    @ApiProperty()
    @IsNumber()
    HOAFees:number

    @ApiProperty()
    @IsNumber()
    Amenties:number

    @ApiProperty()
    @IsNumber()
    AC:number

    @ApiProperty()
    @IsNumber()
    Roof:number

    @ApiProperty()
    @IsNumber()
    Floor:number

    @ApiProperty()
    @IsNumber()
    WindowCovering:number

    @ApiProperty()
    @IsNumber()
    Pool:number

    @ApiProperty()
    @IsNumber()
    PoolFeature:number

    @ApiProperty()
    @IsNumber()
    Style:number

    @ApiProperty()
    @IsNumber()
    Deck:number

    @ApiProperty()
    @IsNumber()
    Patio:number

    @ApiProperty()
    @IsNumber()
    Garage:number

    @ApiProperty()
    @IsNumber()
    Carpot:number

    @ApiProperty()
    @IsNumber()
    ParkignSpace:number

    @ApiProperty()
    @IsNumber()
    FinBasmt:number

    @ApiProperty()
    @IsNumber()
    Basement:number

    @ApiProperty()
    @IsNumber()
    Driveway:number

    @ApiProperty()
    @IsNumber()
    Water:number

    @ApiProperty()
    @IsNumber()
    WaterShare:number

    @ApiProperty()
    @IsNumber()
    Spa:number

}