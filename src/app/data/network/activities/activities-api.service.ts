import { Injectable } from '@angular/core';

/* Internet */
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';

/* RXJs */
import { Observable } from 'rxjs';
import { timeout, map } from 'rxjs/operators';

/* Constants and environment */
import { TIME_OUT } from 'src/app/portal/utilis/ConstantsApp';
import { environment } from 'src/environments/environment';

/* Models */
import { ActivityListModel } from '../../models/response/activities/ActivityResponse';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesApiService {

  private microServicioPath = environment.msPath.activities;

  constructor( private http: HttpClient ) { }


  public getActivitiesListService( paramsRequest: HttpParams ): Observable<HttpResponse<ActivityListModel[]>> {
    return this.http.get<ActivityListModel[]>(this.microServicioPath, {
      params: paramsRequest,
      observe: 'response'
    })
    .pipe(timeout(TIME_OUT))
    .pipe( map( response => {
      return response;
    } ) );
  }
}
