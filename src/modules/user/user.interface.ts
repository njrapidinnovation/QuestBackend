export enum MessageResponse{
    Successfull = 200,
    Error = 400
}


export interface UserData{
    id:string,
    email:string,
    publicaddress:string,
    role:number
}