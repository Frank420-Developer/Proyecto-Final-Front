import { Injectable } from '@angular/core';

/* Http */
import { HttpClient } from '@angular/common/http';

/* RxJS */
import { Observable } from 'rxjs';
import { timeout } from 'rxjs/operators';

/* Constants and environment */
import { TIME_OUT } from 'src/app/portal/utilis/ConstantsApp';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  /* URL and EndPoint */
  private baseURL = environment.baseUrl;
  private endPoints = environment.endPoint;

  constructor( private http: HttpClient ) { }


  public postLogin(): Observable<string> {
    return this.http.post<string>(this.baseURL + this.endPoints.login, '').pipe(
      timeout(TIME_OUT)
    );
  }


  public postRefreshToken(): Observable<string> {
    return this.http.post<string>(this.baseURL + this.endPoints.refreshToken, '').pipe(
      timeout(TIME_OUT)
    );
  }

}
