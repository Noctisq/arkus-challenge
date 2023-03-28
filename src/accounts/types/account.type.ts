
export type Team = {
    id : string; 
    members: TeamMember[];
};

export type TeamMember = {
    id: string; 
    name: string;
    email: string;
}