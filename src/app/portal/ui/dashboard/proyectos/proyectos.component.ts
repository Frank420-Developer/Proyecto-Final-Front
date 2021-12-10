import { Component, OnInit, ViewChild } from '@angular/core';

/* SERVICE CONSUME */
import { HttpParams } from '@angular/common/http';

/* IMPORTACIONES DE FORMULARIO */
import { Validators, FormBuilder, FormGroup, AbstractControl } from '@angular/forms';

/* IMPORTACION DE SERVICIOS */
import { ProjectListService } from 'src/app/data/network/proyectos/project-list.service';


/* INTERFACES  */
import { ProjectDetail, ProjectList } from 'src/app/data/models/response/projects/projects';
import { UpdateProjectDetail, ProjectListPaginator } from 'src/app/data/models/request/projects/projects';

/*  CONSTANTS */
import * as TextES from '../../../utils/textsConstantsES';
import * as AppConst from '../../../utils/constantsApp';

/* DIALOGS */
import { DialogAddProjectComponent } from 'src/app/portal/viewUtils/dialog/dialog-add-project/dialog-add-project.component';

/* ANGULAR MATERIAL */
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  //LISTAS PARA LA TABLA
  public projectList:ProjectList[];
  public headersList: string[];

  //TEXTOS
  public textEs = TextES.PROJECTS;
  private textStatus =TextES.STATUS;
  public buttonsText = TextES.BUTTONS;
  private textLabel = TextES.INPUTS;
  public searchLabel: string;

  //FORM
  public searchGroupForm: FormGroup;
  public searchInput: AbstractControl; 

  //TABLE
  public lengthDataTable:number;
  public pageTable = 0;
  public sizeTable = 5;
  public activeSpinner = true;
  //public paginatorData: ProjectListPaginator = { page: 0, size: 15};
  
  

  constructor( ) {}
   

  ngOnInit(): void {
   
  }

}
