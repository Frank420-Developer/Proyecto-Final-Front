import { Injectable } from '@angular/core';

/* HTTP */
import { HttpClient } from '@angular/common/http'

/* RxJS */
import { map, timeout } from 'rxjs/operators'
import { Observable } from 'rxjs'

/* Constants and Environment */
import { TIME_OUT } from 'src/app/portal/utils/constantsApp';
import { environment } from 'src/environments/environment';


/* MODELS */
import { LoginResponse, RefreshTokenResponse } from '../../models/response/login/login';
import { LoginRequest, RefreshTokenRequest } from '../../models/request/login/login';

@Injectable({
  providedIn: 'root'
})
export class LoginsServiceService {

  /* URL & ENDPOINT */
  private microservicePath = environment.msPath;
  private endPoints = environment.endPoint;


  constructor( private http: HttpClient ) { }

  public postLogin(authToken: LoginRequest):Observable<LoginResponse>{

    return this.http.post<LoginResponse>(this.microservicePath.authentication + this.endPoints.login, authToken)
    .pipe( timeout(TIME_OUT) )
    .pipe( map (response => {
      return response;
    }));
  }

  public postRefreshToken(token: RefreshTokenRequest):Observable<RefreshTokenResponse>{
    
    return this.http.post<RefreshTokenResponse>(this.microservicePath.authentication + this.endPoints.refreshToken, token)
    .pipe( timeout(TIME_OUT) )
    .pipe( map (response => {
      return response;
    }));
  }
}
