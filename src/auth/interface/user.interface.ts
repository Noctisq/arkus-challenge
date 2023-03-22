export enum Role{
    SUPER = "SUPER",
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
};

type User = {
    id : string; 
    name: string;
    password: string;
    role: Role; 
};

export interface IAuthenticate{
    readonly user : User;
    readonly token: string;
}