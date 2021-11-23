import { Component, OnInit, ViewChild } from '@angular/core';

/* Importaciones para consumo de servicio */
import { HttpParams } from '@angular/common/http';

/* Importaciones de formulario */
import { Validators, FormBuilder, FormGroup, AbstractControl } from '@angular/forms';

/* Importación de servicios */
import { ProjectListServiceService } from 'src/app/data/network/proyectos/project-list-service.service';

/* Importacion de interfaces */
import { ProjectList, ProjectDetail } from '../../../../data/models/response/projects/Projects';
import { UpdateProjectDetail } from 'src/app/data/models/request/projects/ProjectsRequest';

/* Importanción de constantes */
import * as TextsES from '../../../utilis/TextsConstantsES';
import * as AppConst from '../../../utilis/ConstantsApp';

/* Dialogs */
import { DialogAddProjectComponent } from 'src/app/portal/viewUtils/dialog/dialog-add-project/dialog-add-project.component';

/* Angular Material */
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  // Listas para tabla
  public projectList: ProjectList[];
  public headersList: string[];

  // Textos
  public textEs = TextsES.PROJECTS;
  private textStatus = TextsES.STATUS;
  public buttonsText = TextsES.BUTTONS;
  private textLabel = TextsES.INPUTS;
  public searchLabel: string;

  // Form
  public searchGroupForm: FormGroup;
  public searchInput: AbstractControl;

  // Table
  public lenghtDataTable: number;
  private pageTable = 0;

  constructor( private projectService: ProjectListServiceService,
               private formBuilder: FormBuilder,
               private dialogController: MatDialog, ) {

    this.headersList = this.textEs.TABLE_HEADERS;
    this.searchLabel = this.textLabel.SEARCH + ' ' + this.textLabel.SEARCH_PROJECT;

    this.searchGroupForm = this.formBuilder.group({
      searchInput: ['', Validators.required ]
    });

    this.searchInput = this.searchGroupForm.controls.searchInput;
  }

  ngOnInit(): void {
    // this.paginator._intl.itemsPerPageLabel = 'Proyectos por pagina';
    // this.paginator.firstPage();

    this.getProjectList('fe3f7dbf-7515-45c2-9d31-f8a7658cdb16', this.pageTable);
  }

  public changePageTable( event: any ) {
    this.pageTable = event.pageIndex;
    this.projectList = [];
    this.getProjectList('fe3f7dbf-7515-45c2-9d31-f8a7658cdb16', this.pageTable);
  }

  private getProjectList(clientID: string, page: number) {
    const paramsRequest = new HttpParams()
                          .set('page', page.toString() )
                          .set('size', '5');

    this.projectService.getListProjects(clientID, paramsRequest).subscribe( (data) => {
      try {
        this.lenghtDataTable = parseInt(data.headers.get('total-elements'), 10);

        /*this.projectList = data.body;
        data.body.forEach( (item: ProjectList, position: number, array: ProjectList[]) => {
          this.getProjectDetail(clientID, data.body[position].id, position);
        });*/
        this.projectList = (data.body as ProjectList[]);

        this.projectList.forEach( (item: ProjectList, position: number, array: ProjectList[]) => {
          this.getProjectDetail(clientID, this.projectList[position].id, position);
        });

      } catch (err) {
      }
    }, errorResponse => {
      console.error('Error en el respuesta ', errorResponse);
    });
  }

  private getProjectDetail( clientID: string, id: string, position: number ) {
    this.projectService.getProjectDetail(clientID, id).subscribe( (data: ProjectDetail) => {
      try {
        this.projectList[position].detail = data;
        this.projectList[position].enabled = data.enabled;

        if ( data.enabled ) {
          this.projectList[position].status = this.textStatus.ACTIVE;
          this.projectList[position].action = this.buttonsText.ACTIONS_INACTIVE;
        } else {
          this.projectList[position].status = this.textStatus.INACTIVE;
          this.projectList[position].action = this.buttonsText.ACTIONS_ACTIVE;
        }

      } catch (err) {
      }
    }, errorResponse => {
      console.error('Error en el respuesta ', errorResponse);
    } );
  }


  public changeStatusColor( status: boolean ) {
    if ( status ) {
      return {
        statusActive: true
      };
    } else {
      return {
        statusInactive: true
      };
    }
  }


  public changeStatus(item: ProjectList) {
    const bodyService: UpdateProjectDetail = {
      key: item.key,
      name: item.name,
      description: item.description,
      enabled: !item.enabled
    };

    this.projectService.putProjectDetail(AppConst.CLIENT_ID, item.id, bodyService).subscribe(
      (data: ProjectDetail) => {
        this.getProjectList(AppConst.CLIENT_ID, this.pageTable);
    });
  }


  public openDialog() {

    const openDialog = this.dialogController.open(DialogAddProjectComponent, {
      disableClose: true,
      width: '635px',
      data: this.projectList
    } );

    openDialog.afterClosed().subscribe( (result: ProjectDetail[]) => {
      this.getProjectList('fe3f7dbf-7515-45c2-9d31-f8a7658cdb16', this.pageTable);
    });

  }

}
