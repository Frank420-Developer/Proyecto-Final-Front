export interface GetAllContratsResponse {
    id: number,
    requisitionId: string,
    ticket: string
}

export interface GetContratDetail {
    idRequisitionClient: string,
    contractName: string,
    ownerName: string,
    signers: Signers[],
    status: string
}

interface Signers{
    signerName: string;
    mail: string,
    phone: string
}