import { Injectable } from '@angular/core';

/* Internet */
import { HttpClient, HttpParams } from '@angular/common/http';

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


  public getActivitiesListService( params: HttpParams ): Observable<ActivityListModel[]> {
    return this.http.get<ActivityListModel[]>(this.microServicioPath, { params })
    .pipe(timeout(TIME_OUT))
    .pipe( map( response => {
      return response;
    } ) );
  }
}
