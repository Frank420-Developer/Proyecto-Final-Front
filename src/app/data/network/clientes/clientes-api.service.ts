import { Injectable } from '@angular/core';

/* Http */
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';

/* RxJs */
import { Observable } from 'rxjs';
import { map, timeout } from 'rxjs/operators';

/* Interfaces */
import { Client } from '../../models/response/clients/ClientsResponse';

/* Constants */
import { TIME_OUT, SLASH } from 'src/app/portal/utilis/ConstantsApp';
import { environment } from 'src/environments/environment';
import * as ServiceConst from '../../../portal/utilis/ConstantsService';
import { NewClient } from '../../models/request/clients/ClientesRequest';

@Injectable({
  providedIn: 'root'
})
export class ClientesApiService {
  private baseUrl = environment.baseUrl;
  private endPoints = environment.endPoint;
  private microServicioPath = environment.msPath;

  constructor( private http: HttpClient ) { }


  public getClientsListApi( paramsRequest?: HttpParams ): Observable<HttpResponse<Client[]>> {
    return this.http.get<Client[]>(this.microServicioPath.clients, {
      params: paramsRequest,
      observe: 'response'
    })
    .pipe(timeout(TIME_OUT))
    .pipe( map( response => {
      return response;
    })
    );
  }


  public postCreateClientApi(body: NewClient) {
    return this.http.post(this.microServicioPath.clients, body)
      .pipe( timeout(TIME_OUT) )
      .pipe( map( response => {
        return response;
      })
    );
  }
}
