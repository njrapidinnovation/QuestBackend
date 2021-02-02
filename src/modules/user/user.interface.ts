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

export enum Role{
    HOAAdmin = 1,
    General = 2,
    Treasury = 3
}

export interface IuserNonce{
    id:string,
    publicaddress:string,
    nonce:string
}