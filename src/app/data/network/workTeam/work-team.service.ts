import { Injectable } from '@angular/core';

/* HTTP */
import { HttpClient } from '@angular/common/http';

/* MODELS */
import { WorkTeamListResponse } from '../../models/response/workTeam/workTeam-response';

/* RxJS */
import { Observable } from 'rxjs';
import { timeout, map } from 'rxjs/operators';

/* CONSTANTS & ENVIRONMENT */
import { environment } from 'src/environments/environment';
import { TIME_OUT } from 'src/app/portal/utils/constantsApp';

@Injectable({
  providedIn: 'root'
})
export class WorkTeamService {

  private microservicePath = environment.msPath;

  constructor( private http: HttpClient ) { }


  public getWorkTeamList(): Observable<WorkTeamListResponse[]>{
    return this.http.get<WorkTeamListResponse[]>(this.microservicePath.workTeam)
          .pipe(timeout(TIME_OUT))
          .pipe(map(response => {
            return response;
          }));
  }
}
