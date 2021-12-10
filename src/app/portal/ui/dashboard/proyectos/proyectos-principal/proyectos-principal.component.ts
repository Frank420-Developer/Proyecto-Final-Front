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
import * as TextES from '../../../../utils/textsConstantsES';
import * as AppConst from '../../../../utils/constantsApp';

/* DIALOGS */
import { DialogAddProjectComponent } from 'src/app/portal/viewUtils/dialog/dialog-add-project/dialog-add-project.component';

/* ANGULAR MATERIAL */
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyectos-principal',
  templateUrl: './proyectos-principal.component.html',
  styleUrls: ['./proyectos-principal.component.scss']
})
export class ProyectosPrincipalComponent implements OnInit {


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
  
  

  constructor( private projectService: ProjectListService, 
               private formBuilder: FormBuilder,
               private dialogController: MatDialog,
               private router: Router) {
    this.headersList = this.textEs.TABLE_HEADERS;
    this.searchLabel = this.textLabel.SEARCH + ' ' + this.textLabel.PROJECTS;

    this.searchGroupForm = this.formBuilder.group({
      searchInput: ['', Validators.required ]
    });

    this.searchInput = this.searchGroupForm.controls.searchInput;
   }

  ngOnInit(): void {
    this.getProjectList(AppConst.CLIENT_ID, this.pageTable, this.sizeTable, '');
    //this.changePageTable(this.paginatorData);
    //this.paginator.firstPage();
  }

  private getProjectList(clientId: string, pageTable:number, sizeTable:number, name: string){
    const paramsRequest = new HttpParams()
                          .set('page', pageTable.toString())
                          .set('size', sizeTable.toString())
                          .set('name', name);

    this.projectService.getListProjects(clientId, paramsRequest).subscribe( (data) => { 
      try{
        
        this.projectList = data.body as ProjectList[];
        this.lengthDataTable = parseInt(data.headers.get('total-elements'), 10);

        this.projectList.forEach( (item:ProjectList, position: number, array: ProjectList[]) => {
          this.getProjectDetail(clientId, data.body[position].id, position);
        });

        this.activeSpinner = false;
      }catch(err){
        this.activeSpinner = false;
      }
    }, errorResponse => {
      this.activeSpinner = false;
    });
  }

  private getProjectDetail (clientId : string , id: string, position: number){
    this.projectService.getProjectDetail(clientId,id).subscribe( (data: ProjectDetail) => {
      try {
        this.projectList[position].detail = data;
        this.projectList[position].enabled = data.enabled;

        if(data.enabled){
          this.projectList[position].status = this.textStatus.ACTIVE;
          this.projectList[position].action = this.buttonsText.ACTIONS_INACTIVE;
        }else{
          this.projectList[position].status = this.textStatus.INACTIVE;
          this.projectList[position].action = this.buttonsText.ACTIONS_ACTIVE;
        }
      } catch (err) {
        
      }
    }, errorResponse => {
      
      
    } );
  }

  public changeStatusColor( status: boolean ){
    if(status){
      return {
        statusActive: true
      };
    }else{
      return{
        statusInactive: true
      };
    }
  }

  public changeStatus( item:ProjectList ){
    const bodyService: UpdateProjectDetail = {
      key: item.key,
      name: item.name,
      description: item.description,
      enabled: !item.enabled,
    };
    this.activeSpinner = true;
    this.projectService.putProjectDetail(AppConst.CLIENT_ID, item.id, bodyService).subscribe( ( data: ProjectDetail ) => {
      this.getProjectList(AppConst.CLIENT_ID, this.pageTable, this.sizeTable, '');
    });
  }

  public openDialog(){
    const openDialog = this.dialogController.open(DialogAddProjectComponent, {
      disableClose: true,
      width: '635px',
      data: this.projectList
    });

    openDialog.afterClosed().subscribe( (result:ProjectDetail[]) => {
      this.activeSpinner = true;
      this.getProjectList(AppConst.CLIENT_ID, this.pageTable, this.sizeTable, '');
    });
  }

  public changePageTable( event: any ){
    this.activeSpinner = true;
    //this.paginatorData.page = (event.pageIndex === undefined) ? this.paginatorData.page : event.//pageIndex;
    //this.paginatorData.size = (event.pageSize === undefined) ? this.paginatorData.size : event.pageSize;
    this.pageTable = event.pageIndex;
    this.sizeTable = event.pageSize;
    //this.getProjectList(AppConst.CLIENT_ID, this.paginatorData);
    this.getProjectList(AppConst.CLIENT_ID, this.pageTable, this.sizeTable, '');
  }

  public searchValue(){
    this.getProjectList(AppConst.CLIENT_ID, this.pageTable, this.sizeTable, this.searchInput.value);
  }
}