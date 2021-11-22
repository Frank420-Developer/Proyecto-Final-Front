import { Component, Inject, OnInit } from '@angular/core';

/* Importaciones de formulario */
import { FormGroup, AbstractControl, Validators, FormBuilder } from '@angular/forms';

/* Importaciones de http */
import { HttpResponse } from '@angular/common/http';

/* Interfaces */
import { Client } from 'src/app/data/models/response/clients/ClientsResponse';

/* Constants */
import { SPACE, PLUS } from 'src/app/portal/utilis/ConstantsApp';
import * as TextES from '../../../utilis/TextsConstantsES';

/* Service */
import { ClientesApiService } from 'src/app/data/network/clientes/clientes-api.service';
import { NewProject, ObjectNewProject } from 'src/app/data/models/request/projects/ProjectsRequest';
import { GeneralFunctionsService } from 'src/app/portal/utilis/utilFunctions/general-functions.service';
import { ProjectListServiceService } from 'src/app/data/network/proyectos/project-list-service.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProjectDetail } from 'src/app/data/models/response/projects/Projects';

@Component({
  selector: 'app-dialog-add-project',
  templateUrl: './dialog-add-project.component.html',
  styleUrls: ['./dialog-add-project.component.scss']
})
export class DialogAddProjectComponent implements OnInit {

  // Texts
  public textES = TextES.DIALOG_PROJECTS;
  public textButtons = TextES.BUTTONS;
  public txtAddButton: string;
  public txtError = TextES.ERROR_MESSAGE;

  // Lista
  public clientList: Client[];
  public addProjectList = [];
  private responseList = [];

  // Form
  public addProjectForm: FormGroup;
  public clientSelected: AbstractControl;
  public projectName: AbstractControl;

  // Flags
  public flagLengthList = false;
  public flagActiveSendProjects = true;
  private count = 0;

  constructor( private clientApi: ClientesApiService,
               private utilities: GeneralFunctionsService,
               private formBuilder: FormBuilder,
               private projectService: ProjectListServiceService,
               private dialog: MatDialogRef<DialogAddProjectComponent>,
               @Inject(MAT_DIALOG_DATA) private dataReceived: any ) {

    this.txtAddButton = PLUS + SPACE + this.textButtons.ADD_MORE;

    this.addProjectForm = this.formBuilder.group({
      clientSelectedGroup : ['', Validators.required],
      projectName : ['', Validators.compose( [ Validators.required,
                                               Validators.pattern('[a-z A-Z]{1,50}') ] ) ]
    });

    this.clientSelected = this.addProjectForm.controls.clientSelectedGroup;
    this.projectName = this.addProjectForm.controls.projectName;

    console.log('Datos recibidos: ', this.dataReceived );
  }

  ngOnInit(): void {
    this.getClientsList();
  }

  private getClientsList() {

    this.clientApi.getClientsListApi().subscribe( (data: HttpResponse<Client[]>) => {
      this.clientList = data.body;
    }, errorResponse => {
      console.error('Error en el respuesta ', errorResponse);
    });

  }

  public addNewProject() {
    this.count++;

    if ( this.count > 0 && this.count <= 5 ) {

      const newProject: ObjectNewProject = {
        clientId: this.clientSelected.value.id,
        clientName: this.clientSelected.value.name,
        newProject: {
          key: this.utilities.generateProjectKey(this.projectName.value),
          name: this.projectName.value,
          description: this.clientSelected.value.name + SPACE + this.projectName.value
        }
      };

      this.addProjectList.push(newProject);

      this.addProjectForm.reset();
      this.flagLengthList = false;
      this.flagActiveSendProjects = false;
    } else {
      this.flagLengthList = true;
      this.utilities.onAlertMessage(this.txtError.PROJECTS_LIST_COMPLETE, this.textButtons.OK);
    }
  }


  public createNewProjects() {

    this.addProjectList.forEach(
      (item: ObjectNewProject, position: number, array: ObjectNewProject[]) => {
        this.projectService.postCreateProject(item.clientId, item.newProject).subscribe( (data: ProjectDetail) => {
          try {
            this.responseList.push(data);
          } catch (err) {
          }
        }, errorResponse => {
        } );
      });

    this.dialog.close(this.responseList);
  }
}
