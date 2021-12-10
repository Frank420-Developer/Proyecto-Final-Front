import { Component, OnInit } from '@angular/core';

import { GeneralStructsService } from 'src/app/data/dto/general-structs.service';

/* MODELS */
import { SecondHeaderModel } from 'src/app/data/models/local/inputsModels';
import { ProjectDetail } from 'src/app/data/models/response/projects/projects';
import { PROJECT_DETAIL_MOCK } from 'src/app/data/models/local/table-mocks';

/* SERVICES */
import { ProjectListService } from 'src/app/data/network/proyectos/project-list.service';

/* TEXTOS */
import { BUTTONS, INPUTS, PROJECTS, PROJECT_DETAIL } from 'src/app/portal/utils/textsConstantsES';

/* ROUTER */
import { ActivatedRoute } from '@angular/router';
import { GeneralFunctionsService } from 'src/app/portal/utils/utilFunctions/general-functions.service';


@Component({
  selector: 'app-detalle-proyecto',
  templateUrl: './detalle-proyecto.component.html',
  styleUrls: ['./detalle-proyecto.component.scss']
})
export class DetalleProyectoComponent implements OnInit {

  public headerData: SecondHeaderModel;


  public idProject: string;
  public projectDetail: ProjectDetail;
  public listTable = PROJECT_DETAIL_MOCK;
  public headersList = PROJECT_DETAIL.TABLE_HEADERS;
  public txtButtons = BUTTONS;
  public pageOptions = [5, 10, 20];
  public lengthDataTable: number

  constructor( private dto: GeneralStructsService,
    private route: ActivatedRoute,
    private api: ProjectListService,
    public utilities: GeneralFunctionsService) { 

      this.lengthDataTable = this.listTable.length;
    
    
  }

  ngOnInit(): void {
     this.headerData = this.dto.createSecondHeaderStruct(
          PROJECTS.SUBMENU.TITLE_DETAIL,
          PROJECTS.SUBMENU.CLIENT,
          this.route.snapshot.paramMap.get('client'),
          PROJECTS.SUBMENU.PROJECT,
          this.route.snapshot.paramMap.get('project'),
          true,
          true,
          PROJECTS.SUBMENU.PREVIOUS_PAGE,
          PROJECTS.SUBMENU.HOURS,
          '250h',
          INPUTS.SEARCH,
        ); 
    //this.getProjectDetail();
  }

  // public getProjectDetail(){
  //   this.api.getProjectDetail(CLIENT_ID, this.idProject).subscribe( (data:ProjectDetail) =>{
  //     try {
  //       this.projectDetail = data;
  //       console.log(this.projectDetail);
  //       this.headerData = this.dto.createSecondHeaderStruct(
  //         PROJECTS.SUBMENU.TITLE_DETAIL,
  //         PROJECTS.SUBMENU.CLIENT,
  //         this.projectDetail.name,
  //         PROJECTS.SUBMENU.PROJECT,
  //         this.projectDetail.key,
  //         true,
  //         true,
  //         PROJECTS.SUBMENU.PREVIOUS_PAGE,
  //         PROJECTS.SUBMENU.HOURS,
  //         '250h',
  //         INPUTS.SEARCH,
  //       ); 
  //     } catch (error) {
        
  //     }
  //   });
  // }


  public changePageTable(event: any){

  }
}
