import { Injectable } from '@angular/core';

/* Importaciones de http */
import { HttpClient, HttpParams } from '@angular/common/http';

/* Importaciones de modelos */
import { UserListResponse } from '../../models/response/users/UsersResponse';

/* Importaciones de RxJS */
import { Observable } from 'rxjs';
import { map, timeout } from 'rxjs/operators';

/* Importaciones de constantes */
import { environment } from 'src/environments/environment';
import { TIME_OUT } from 'src/app/portal/utilis/ConstantsApp';

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {
  private msPath = environment.msPath.users;

  constructor( private http: HttpClient ) { }


  /**
   * @description Método que se conecta al microservicio de el listado de usuario.
   * @param paramsRequest (HttpParams) Parámetros de entrada para el consumo del servicio
   * @returns (UserListResponse[]) Arreglo del listado de usuarios.
   */
  public getUserListApi(paramsRequest: HttpParams): Observable<UserListResponse[]> {
    return this.http.get<UserListResponse[]>(this.msPath, {
      params: paramsRequest
    }).pipe( timeout(TIME_OUT) )
      .pipe( map( response => {
        return response;
      })
    );

  }
}
