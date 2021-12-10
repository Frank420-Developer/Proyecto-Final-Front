import { Injectable } from '@angular/core';

/* HTTP */
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http'

/* RxJS */
import { map, timeout } from 'rxjs/operators'
import { Observable } from 'rxjs'

/* CONSTANTS */
import { TIME_OUT } from 'src/app/portal/utils/constantsApp';
import { environment } from 'src/environments/environment';

/* INTERFACES */
import { Client } from '../../models/response/clients/clients';
import { NewClient } from '../../models/request/clients/clients';



@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  /* URL & ENDPOINT */
  private microServicioPath = environment.msPath;

  constructor( private http: HttpClient ) { }


  public getclientsList(paramsRequest?: HttpParams):Observable<HttpResponse<Client[]>>{
    return this.http.get<Client[]>(this.microServicioPath.clients,{
      params: paramsRequest,
      observe: 'response'
    })
    .pipe(timeout(TIME_OUT))
    .pipe( map (response => {
      return response;
    }))
  }

  public postCreateClient( body: NewClient){
    return this.http.post(this.microServicioPath.clients, body)
    .pipe(timeout(TIME_OUT))
    .pipe( map (response =>{
      return response;
    }));
  }
}
