import { Injectable } from '@angular/core';

/* HTTP */
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';

/* RxJs */
import { Observable } from 'rxjs';
import { map, timeout } from 'rxjs/operators';

/* ENVIRONMENT */
import { environment } from 'src/environments/environment';
import { GetAllContratsResponse, GetContratDetail } from '../../models/response/getContrats/contrats';

@Injectable({
  providedIn: 'root'
})
export class GetContratsService {

   /* URL */
  private microservicePath = environment;
  private headers = new HttpHeaders();         
      

  constructor( private http: HttpClient ) { 
    this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
      this.headers.append('Access-Control-Allow-Origin', '*')
      this.headers.append('Access-Control-Allow-Headers', 'Content-Type')
      this.headers.append('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
  }

  public getAllContrats(paramsRequest: HttpParams):Observable<HttpResponse<GetAllContratsResponse[]>>{

    return this.http.get<GetAllContratsResponse[]>(this.microservicePath.baseUrl + this.microservicePath.msPath.procesos, {
      headers: this.headers,
      params: paramsRequest,
      observe:'response',
    })
    .pipe( map(response =>{
      return response;
    }));
  }

  public getContratDetail(id: string): Observable<GetContratDetail>{

      return this.http.get<GetContratDetail>(this.microservicePath.baseUrl + this.microservicePath.msPath.detalle + id, {
        headers: this.headers
      })
      .pipe( map(response =>{
      return response;
    }));
  }
}
