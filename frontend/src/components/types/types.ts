export interface FileStructure{
    path?:string;
    name?:string;
    children?:FileStructure[]
}
export interface dirResponse{
    result:FileStructure
}

