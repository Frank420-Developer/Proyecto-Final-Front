import { Injectable } from '@angular/core';

/* Http */
import { HttpClient, HttpRequest } from '@angular/common/http';

/* RxJs */
import { Observable } from 'rxjs';
import { timeout } from 'rxjs/operators';

/* Constants */
import { TIME_OUT, SLASH } from 'src/app/portal/utilis/ConstantsApp';
import { environment } from 'src/environments/environment';
import * as ServiceConst from '../../../portal/utilis/ConstantsService';

/* Interfaces */
import { ProjectList, ProjectDetail } from '../../models/response/projects/Projects';
import { UpdateProjectDetail, NewProject } from '../../models/request/projects/ProjectsRequest';

@Injectable({
  providedIn: 'root'
})
export class ProjectListServiceService {
  private baseUrl = environment.baseUrl;
  private endPoints = environment.endPoint;
  private microServicioPath = environment.msPath;

  constructor(private http: HttpClient) { }

  /**
   * @description Método para el consumo del servicio del listado de proyectos
   * @param clientID (string) ID de cliente para usar en el path del servicio
   * @returns (ProjectList[]) interfaz con la estructura de la respuesta del servicio
   */
  public getListProjects(clientID: string, paramsRequest: any) {

    /*return this.http.get<any[]>(this.microServicioPath.clients + clientID + this.endPoints.projects, {
      headers: ServiceConst.PRINCIPAL_HEADER,
      params: paramsRequest,
      observe: 'response'
    }).pipe(
      timeout(TIME_OUT)
    );*/
    return this.http.get(this.microServicioPath.clients + clientID + this.endPoints.projects, {
      headers: ServiceConst.PRINCIPAL_HEADER,
      params: paramsRequest,
      observe: 'response'
    }).pipe(
      timeout(TIME_OUT)
    );
  }


  public getProjectDetail(clientID: string, id: string): Observable<ProjectDetail> {
    return this.http.get<ProjectDetail>(
      this.microServicioPath.clients + clientID + this.endPoints.projects + SLASH + id,
      { headers: ServiceConst.PRINCIPAL_HEADER }
      ).pipe(
        timeout(TIME_OUT)
      );
  }


  public putProjectDetail( clientID: string, id: string, body: UpdateProjectDetail ): Observable<ProjectDetail> {
    return this.http.put<ProjectDetail>(
      this.microServicioPath.clients + clientID + this.endPoints.projects + SLASH + id, body
      ).pipe(timeout(TIME_OUT));
  }

  public postCreateProject( clientID: string, body: NewProject): Observable<ProjectDetail> {
    return this.http.post<ProjectDetail>(this.microServicioPath.clients + clientID + this.endPoints.projects, body).pipe(timeout(TIME_OUT));
  }

}
