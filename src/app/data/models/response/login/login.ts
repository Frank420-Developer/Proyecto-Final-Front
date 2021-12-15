export interface LoginResponse {
    accessToken: string,
    refreshToken: string,
    email:string,
    name: string,
    lastName: string,
    id: string,
}

export interface RefreshTokenResponse {
    accessToken: string,
    refreshToken: string,
    email: string
}


export interface LoginWithGoogleModel {
    id: string,
    name: string,
    email: string,
    photoUrl: string,
    firstName: string,
    lastName: string,
    authToken: string,
    idToken: string,
    response: ResponseTokenInfo,
    provider: string,
}

interface ResponseTokenInfo {
    token_type: string,
    access_token: string,
    scope: string,
    login_hint: string,
    expires_in: number,
    id_token: string,
    session_state: {
        extraQueryParams: {
            authuser: string,
        }
    },
    first_issued_at:number,
    expires_at: number,
    idpId:string
}

export interface UserInfoModel {
    email: string,
    name: string,
    lastName: string,
    photo: string,
}


export interface LoginResponseWithFad {
    access_token: string;
    token_type: string;
}