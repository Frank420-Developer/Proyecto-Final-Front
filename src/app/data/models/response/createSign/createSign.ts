export interface CreateSignResponse {
    success: boolean
    error: string
    code: string
    data: SignDataResponse
}

interface SignDataResponse {
    requisitionId: string
    url: string
    key: string
    vector: string
    ticket: string
}