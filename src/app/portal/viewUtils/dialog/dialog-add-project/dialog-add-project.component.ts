import { Component, Inject, OnInit } from '@angular/core';

/* HTTP */
import { HttpErrorResponse, HttpParams, HttpResponse } from '@angular/common/http';

/* CONSTANTS */
import * as TextEs from '../../../utils/textsConstantsES';
import { PLUS, SPACE } from 'src/app/portal/utils/constantsApp';

/* SERVICES */
import { ClientesService } from 'src/app/data/network/clients/clientes.service';
import { GeneralFunctionsService } from 'src/app/portal/utils/utilFunctions/general-functions.service';
import { ProjectListService } from 'src/app/data/network/proyectos/project-list.service';
import { ErrorManagerService } from 'src/app/portal/utils/utilFunctions/error-manager.service';

/* INTERFACES */
import { Client } from 'src/app/data/models/response/clients/clients';
import { ObjectNewProject } from 'src/app/data/models/request/projects/projects';

/* FORMULARIO */
import { FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { ProjectDetail } from 'src/app/data/models/response/projects/projects';


/* ANGULAR MATERIAL */
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';





@Component({
  selector: 'app-dialog-add-project',
  templateUrl: './dialog-add-project.component.html',
  styleUrls: ['./dialog-add-project.component.scss']
})
export class DialogAddProjectComponent implements OnInit {

  //TEXTOS
  public textEs = TextEs.DIALOG_ADD_PROJECT;
  public errorMessages = TextEs.ERROR_MESSAGE;

  //BUTTONS
  public btnText = TextEs.BUTTONS;
  public addMore: string;

  //LISTA
  public clientList: Client[];
  public addProjectList = [];
  private responseList = [];

  //FORM 
  public addProjectForm: FormGroup;
  public clientSelect: AbstractControl;
  public projectName: AbstractControl;

  //FLAG
  private count = 0;
  public activeButtonSendProjects = true;
  public activeButton = false;

  constructor( private clientApi: ClientesService,
                private utilities: GeneralFunctionsService,
                private formBuilder: FormBuilder,
                private errorManager: ErrorManagerService,
                private projectsService: ProjectListService,
                private dialog: MatDialogRef<DialogAddProjectComponent>,
                @Inject(MAT_DIALOG_DATA) private dataRecived: any) {

    this.addMore = PLUS + SPACE + this.btnText.ADD;
    this.addProjectForm = this.formBuilder.group({
      clientSelect: ['', Validators.required],
      projectName: ['', Validators.compose( [Validators.required, 
                                             Validators.pattern('[a-z A-Z ñÑ]{1,50}')] )]
    });

    this.clientSelect = this.addProjectForm.controls.clientSelect;
    this.projectName = this.addProjectForm.controls.projectName;
    
   }

  ngOnInit(): void {
    this.getClientsList();
  }

  private getClientsList(){
    const params = new HttpParams().set('size','50')
    this.clientApi.getclientsList(params).subscribe( (data:HttpResponse<Client[]>) => {
      this.clientList = data.body;
    }, errorResponse => {
      
    });
  }

  public addNewProject(){
    this.count++;
    if(this.count > 0 && this.count <= 4 ){
    const newProject: ObjectNewProject = {
     clientId: this.clientSelect.value.id,
     clientName: this.clientSelect.value.name,
     newProject: {
        key: this.utilities.generateProjectKey(this.projectName.value),
        name: this.projectName.value,
        description: this.clientSelect.value.name + SPACE + this.projectName.value,
     }
    };

    this.addProjectList.push(newProject);

    this.addProjectForm.reset();
    this.activeButtonSendProjects = false
    this.activeButton = false;
    }else{
      this.activeButton = true;
      this.utilities.onAlertMessage(this.errorMessages.PROJECT_LIST_COMPLETE, this.btnText.OK);
    }
    this.addMore = (this.addProjectList.length === 0) ? PLUS + SPACE + this.btnText.ADD : PLUS + SPACE + this.btnText.ADD_MORE;
  }

  public createNewProject(){

    this.addProjectList.forEach( (item: ObjectNewProject, position: number, array: ObjectNewProject[]) => {
          this.projectsService.postProject(item.clientId, item.newProject).subscribe( (data: ProjectDetail) => {
      try{
        this.responseList.push(data);

        this.dialog.close(this.responseList);
      }catch(err){
      }
    }, (errorResponse: HttpErrorResponse) => {
      this.errorManager.validateErrorResponse(errorResponse.error);
    });
    });

    
  }

  public removeProject(pos: number){
    if(this.addProjectList.length > 1){
      this.addProjectList.splice(pos, 1)
    }else{
      this.addProjectList = [];
    }

    this.addMore = (this.addProjectList.length === 0) ? PLUS + SPACE + this.btnText.ADD : PLUS + SPACE + this.btnText.ADD_MORE;
  }

}
