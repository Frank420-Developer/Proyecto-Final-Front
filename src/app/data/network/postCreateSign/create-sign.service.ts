import { Injectable } from '@angular/core';


/* HTTP */
import { HttpClient, HttpHeaders } from '@angular/common/http';

/* RxJs */
import { Observable } from 'rxjs';
import { map, timeout } from 'rxjs/operators';

/* CONSTANTS & ENVIRONMENT */
import { environment } from 'src/environments/environment';
import { CreateSignResponse } from '../../models/response/createSign/createSign';
import { CreateBodyToCreateSign } from '../../models/request/createSign/createSign';

@Injectable({
  providedIn: 'root'
})
export class CreateSignService {

  /* URL */
  private microservicePath = environment;

  constructor( private http: HttpClient) { }


  public postCreateSign(body: CreateBodyToCreateSign): Observable<CreateSignResponse>{

     let headers = new HttpHeaders();               
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      headers.append('Access-Control-Allow-Origin', '*')
      headers.append('Access-Control-Allow-Headers', 'Content-Type')
      headers.append('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT')
      
    return this.http.post<CreateSignResponse>('fad/'+this.microservicePath.msPath.crearFirma, body, {
      // headers: headers
    })
    .pipe( map (response => {
      return response;
    }))
  }
}
