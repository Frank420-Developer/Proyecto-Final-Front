import { Injectable } from '@angular/core';

/* HTTP */
import { HttpClient, HttpParams, HttpRequest, HttpResponse } from '@angular/common/http';

/* RxJS */
import { Observable } from 'rxjs';
import { map, timeout } from 'rxjs/operators';

/* CONSTANTS & ENVIRONMENT */
import { TIME_OUT } from 'src/app/portal/utils/constantsApp';
import { environment } from 'src/environments/environment';
import { UsersListResponse } from '../../models/response/users/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  //URL
  private microservicePath = environment.msPath.users;

  constructor( private http: HttpClient) { }


  /**
   * @description Método que se conecta al microservicio de usuarios
   * @param paramsRequest (HttpParms) Parametros de entrada para el consumo del servicio
   * @returns  (UserListResponse[]) arreglo del listado de usuarios
   */
   public getUsersList(paramsRequest: HttpParams): Observable<HttpResponse<UsersListResponse[]>>{
    return this.http.get<UsersListResponse[]>(this.microservicePath, {
      params: paramsRequest,
      observe: 'response',
    })
    .pipe(timeout(TIME_OUT))
    .pipe(map(response => {
      return response;
    }));
  }
}
