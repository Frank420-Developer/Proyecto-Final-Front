export interface ProjectList {
    id: string;
    key: string;
    name: string;
    description: string;
    idClient: IdClient;
    detail?: ProjectDetail;
    enabled?: boolean;
    status?:string;
    action?:string;
}

export interface ProjectDetail {
    creationDate :  string;
    description :  string;
    enabled:  boolean;
    id :  string;
    idAuthor : IdAuthor;
    idClient : IdClient;
    key :  string;
    modificationDate :  string;
    name :  string;
}

export interface ProjectDetailMock {
    collaborator: string,
    area: string,
    activities: number,
    lastRegister: string,
    hours: number,
}
interface IdClient{
    name: string
}

interface IdAuthor{
    name :  string;
    lastName :  string;
}
