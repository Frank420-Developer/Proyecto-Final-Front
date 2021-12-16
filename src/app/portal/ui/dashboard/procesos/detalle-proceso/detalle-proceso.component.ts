import { Component, OnInit } from '@angular/core';


import { GetContratsService } from 'src/app/data/network/getAllContrats/get-contrats.service';

import { ActivatedRoute } from '@angular/router';
import { GetContratDetail } from 'src/app/data/models/response/getContrats/contrats';
import { DETALLE_FIRMA } from 'src/app/portal/utils/textsConstantsES';
import { LOGO_NAAT_TECH } from 'src/app/portal/utils/imagesRoutes';
import { UserInfoModel } from 'src/app/data/models/response/login/login';
import { USER_INFO } from 'src/app/portal/utils/constantsApp';

@Component({
  selector: 'app-detalle-proceso',
  templateUrl: './detalle-proceso.component.html',
  styleUrls: ['./detalle-proceso.component.scss']
})
export class DetalleProcesoComponent implements OnInit {

  public contratDetail: GetContratDetail;

  public detalle = DETALLE_FIRMA;

  public logoNaatTech = LOGO_NAAT_TECH;

  public userInfo: UserInfoModel;
  public imgUser: string;

  
    // Flags
  public activeSpinner = true;

  constructor( private api: GetContratsService,
                private route: ActivatedRoute) { }

              
  ngOnInit(): void {
    this.getContratDetail();
    this.userInfo = JSON.parse(localStorage.getItem(USER_INFO));
    this.imgUser = this.userInfo.photo;
  }

  public getContratDetail(){
    this.api.getContratDetail(this.route.snapshot.paramMap.get('id')).subscribe( (data: GetContratDetail) =>{
      try {
        this.contratDetail = data;   
        
        this.activeSpinner = false;
      } catch (error) {
        this.activeSpinner = false;
      }
    }, errorResponse => {});

  }

}
