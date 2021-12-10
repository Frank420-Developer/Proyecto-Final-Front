import { Injectable } from '@angular/core';

/* HTTP */
import { HttpClient } from '@angular/common/http'

/* RxJS */
import { timeout } from 'rxjs/operators'
import { Observable } from 'rxjs'

/* CONSTANTS */
import { TIME_OUT, SLASH } from 'src/app/portal/utils/constantsApp';
import { environment } from 'src/environments/environment';
import * as ServiceCons from "../../../Portal/utils/constantsService"

/* INTERFACES */
import { ProjectDetail, ProjectList } from '../../models/response/projects/projects';
import { NewProject, UpdateProjectDetail } from '../../models/request/projects/projects';


@Injectable({
  providedIn: 'root'
})
export class ProjectListService {

  /* URL & ENDPOINT */
  private urlBase = environment.baseUrl;
  private endPoints = environment.endPoint;
  private microservicePath = environment.msPath;
  private microServicioPath = environment.msPath;

  constructor( private http: HttpClient ) { }


  /**
   * @description      metodo para el consumo del servicio del lissrtado de proywxrtos 
   * @param clientID  (Strinf)_ id de cliente para usar el path del servucio 
   * @returns      interfaz con la estructura de la respuesta del servicio
   */
  public getListProjects(clientId: string, paramsRequest: any){
    
    return this.http.get(this.microservicePath.clients + clientId + this.endPoints.projects,{
      headers:ServiceCons.PRINCIPAL_HEADER,
      params: paramsRequest,
      observe: 'response'
    }).pipe(
      timeout(TIME_OUT)
    );
  }

  public getProjectDetail (clientId: string, id: string ):Observable<ProjectDetail>{
    return this.http.get<ProjectDetail>(this.microServicioPath.clients +clientId + this.endPoints.projects  +SLASH +id,{
      headers :ServiceCons.PRINCIPAL_HEADER
    }).pipe(
        timeout(TIME_OUT)
    );
  }

  public putProjectDetail(clientId: string, id: string, body: UpdateProjectDetail ):Observable<ProjectDetail>{
    return this.http.put<ProjectDetail>(this.microServicioPath.clients +clientId + this.endPoints.projects  + SLASH + id, body).pipe(
        timeout(TIME_OUT)
    );
  }

  public postProject(clientId: string, body: NewProject):Observable<ProjectDetail>{
    return this.http.post<ProjectDetail>(this.microServicioPath.clients + clientId + this.endPoints.projects, body).pipe(
      timeout(TIME_OUT)
    );
  }
}
