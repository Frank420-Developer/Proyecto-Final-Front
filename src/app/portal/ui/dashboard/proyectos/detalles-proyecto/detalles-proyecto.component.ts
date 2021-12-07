import { Component, OnInit } from '@angular/core';

/* MODELS */
import { SecondHeaderModel } from 'src/app/data/models/local/InputsModels';

/* Importacion de constantes, utilidades y dto */
import { PROJECTS, INPUTS } from 'src/app/portal/utilis/TextsConstantsES';
import { GeneralStructsService } from 'src/app/data/dto/general-structs.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles-proyecto',
  templateUrl: './detalles-proyecto.component.html',
  styleUrls: ['./detalles-proyecto.component.scss']
})
export class DetallesProyectoComponent implements OnInit {

  // Data output --> Header
  public headerData: SecondHeaderModel;

  // Texts
  private textES = PROJECTS.SUBMENU;

  constructor( private dto: GeneralStructsService,
               private route: ActivatedRoute ) {

    // Obteniuendo datos
    console.log(route.snapshot.paramMap.get('id'));
    
    this.headerData = this.dto.createSecondStructHeader(
      this.textES.TITLE_DETAIL, this.textES.CLIENT, 'Cliente 1', this.textES.PROJECT, 'Proyecto 1',
      true, true, this.textES.ROUTE_PROJECTS, this.textES.TOTAL_HOURS, '250h', INPUTS.SEARCH
    );
  }

  ngOnInit(): void {
  }

}
