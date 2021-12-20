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
     
      

  constructor( private http: HttpClient ) {    
      
  }

  public getAllContrats(paramsRequest: HttpParams):Observable<GetAllContratsResponse[]>{
 const headers = new HttpHeaders();      
     headers.set('Content-Type', 'application/x-www-form-urlencoded');
      headers.append('Access-Control-Allow-Origin', '*')
      headers.append('Access-Control-Allow-Headers', 'Content-Type')
      headers.append('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');

      console.log(headers);
      
    const options = {headers: headers}

    return this.http.get<GetAllContratsResponse[]>('fad/'+this.microservicePath.msPath.procesos, options)
    .pipe( map(response =>{
      return response;
    }));
  }

  public getContratDetail(id: string): Observable<GetContratDetail>{

      return this.http.get<GetContratDetail>('fad/'+this.microservicePath.msPath.detalle + id, {
        // headers: this.headers
      })
      .pipe( map(response =>{
      return response;
    }));
  }
}
