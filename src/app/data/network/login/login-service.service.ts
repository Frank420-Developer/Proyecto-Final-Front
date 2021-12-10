import { Injectable } from '@angular/core';

/* Http */
import { HttpClient } from '@angular/common/http';

/* RxJS */
import { Observable } from 'rxjs';
import { map, timeout } from 'rxjs/operators';

/* Constants and environment */
import { TIME_OUT } from 'src/app/portal/utilis/ConstantsApp';
import { environment } from 'src/environments/environment';
import { LoginResponse, RefreshTokenResponse } from '../../models/response/login/LoginResponse';
import { LoginRequest, RefreshTokenRequest } from '../../models/request/login/LoginRequest';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  /* URL and EndPoint */
  private baseURL = environment.baseUrl;
  private msPath = environment.msPath;
  private endPoints = environment.endPoint;

  constructor( private http: HttpClient ) { }


  public postLogin(authToken: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.msPath.authentication + this.endPoints.login, authToken)
    .pipe( timeout(TIME_OUT) )
    .pipe( map( response => {
      return response;
    } )
    );
  }


  public postRefreshToken( token: RefreshTokenRequest ): Observable<RefreshTokenResponse> {
    return this.http.post<RefreshTokenResponse>(this.msPath.authentication + this.endPoints.refreshToken, token)
    .pipe( timeout(TIME_OUT) )
      .pipe( map( response => {
        return response;
      } )
      );
  }

}
