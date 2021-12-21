import { Injectable } from '@angular/core';

/* HTTP */
import { HttpClient, HttpHeaders } from '@angular/common/http'

/* RxJS */
import { map, timeout } from 'rxjs/operators'
import { Observable } from 'rxjs'

/* Constants and Environment */
import { TIME_OUT } from 'src/app/portal/utils/constantsApp';
import { environment } from 'src/environments/environment';


/* MODELS */
import { LoginResponseWithFad } from '../../models/response/login/login';

@Injectable({
  providedIn: 'root'
})
export class LoginsServiceService {

  /* URL & ENDPOINT */
  private microservicePath = environment;


  constructor( private http: HttpClient ) { }

  public postLoginAuthWithFad(): Observable<LoginResponseWithFad>{

    let headers = new HttpHeaders();               
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      headers.append('Access-Control-Allow-Origin', '*')
      headers.append('Access-Control-Allow-Headers', 'Content-Type')
      headers.append('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT')

    return this.http.post<LoginResponseWithFad>("fad/"+this.microservicePath.endPoint.login, 
      // headers
      ''
      )
    .pipe( map( response => {
      return response;
    }));
  }

  
}
