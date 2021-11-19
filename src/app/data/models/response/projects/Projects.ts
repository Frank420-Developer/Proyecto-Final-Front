export interface ProjectList {
    description: string;
    id: string;
    idClient: IDClient;
    key: string;
    name: string;
    detail?: ProjectDetail;
    enabled?: boolean;
    status?: string;
    action?: string;
}

export interface ProjectDetail {
    creationDate: string;
    description: string;
    enabled: boolean;
    id: string;
    idAuthor: IDAuthor;
    idClient: IDClient;
    key: string;
    modificationDate: string;
    name: string;
}

interface IDClient {
    name: string;
}

interface IDAuthor {
    lastName: string;
    name: string;
}
