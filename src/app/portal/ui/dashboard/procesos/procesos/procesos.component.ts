import { Component, OnInit, ViewChild } from '@angular/core';
import { GetAllContratsResponse } from 'src/app/data/models/response/getContrats/contrats';
import { UserInfoModel } from 'src/app/data/models/response/login/login';

/* SERVICES */
import { GetContratsService } from 'src/app/data/network/getAllContrats/get-contrats.service';
import { USER_INFO } from 'src/app/portal/utils/constantsApp';
import { LOGO_NAAT_TECH } from 'src/app/portal/utils/imagesRoutes';
import { BUTTONS, CREAR_FIRMA } from 'src/app/portal/utils/textsConstantsES';

import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { HttpParams, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-procesos',
  templateUrl: './procesos.component.html',
  styleUrls: ['./procesos.component.scss']
})
export class ProcesosComponent implements OnInit {
   @ViewChild(MatPaginator) paginator: MatPaginator;

  public contratList: GetAllContratsResponse[];

  public emptyList: string;
  public headersList = CREAR_FIRMA.TABLE_HEADERS;
  public txtButtons = BUTTONS; 

  public logoNaatTech = LOGO_NAAT_TECH;

  public userInfo: UserInfoModel;
  public imgUser: string;
  public username: string;

  public list: number;
  public elements: number;
  public page = 0;
  public size = 5;

  public flag = false;

  constructor( private api: GetContratsService,
              private router: Router) { }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    this.getAllContrats(this.page, this.size);
  }
  
  ngOnInit(): void {
    
    this.userInfo = JSON.parse(localStorage.getItem(USER_INFO));
    this.imgUser = this.userInfo.photo;
    this.username = this.userInfo.name;
  }

  public getAllContrats(page: number, size: number){
    const params = new HttpParams()
                    .set('page',page.toString())
                    .set('size', size.toString());
    this.api.getAllContrats(params).subscribe( (data:GetAllContratsResponse[]) =>{
      try {
        // if(data === null){
        //   this.emptyList = "lista vacia"
        // }
        this.contratList = data;
        this.flag = (this.contratList === null || this.contratList === undefined) ? false : true;
      } catch (error) {
        
      }
    }, errorResponse =>{});
  }


  public changePageTable(event: any){
    this.size = event.pageSize;
    this.page = event.pageIndex;
    this.contratList = [];
    this.getAllContrats(this.page, this.size);
  }

  public guardarTicket(ticket: string){
    localStorage.setItem("ticket", ticket);
  }

  public back(){
    this.router.navigate(['../dashboard']);
  }
}
