import { Component, Input, OnInit } from '@angular/core';

/* IMPORTACIONES DE FORMULARIO */
import { Validators, FormBuilder, FormGroup, AbstractControl } from '@angular/forms';

/* IMPORTACION DE SERVICIOS */
import { ProjectListService } from 'src/app/data/network/proyectos/project-list.service';

/* INTERFACES  */
import { ProjectDetail, ProjectList } from 'src/app/data/models/response/projects/projects';
import { SecondHeaderModel } from 'src/app/data/models/local/inputsModels';

/* TEXTOS */
import * as TextsES from '../../../utils/textsConstantsES'

import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-second-headers',
  templateUrl: './second-headers.component.html',
  styleUrls: ['./second-headers.component.scss']
})
export class SecondHeadersComponent implements OnInit {

  @Input() dataHeaderInput: SecondHeaderModel

  public flag: SecondHeaderModel;

  constructor( private router: ActivatedRoute) { 
    this.flag = this.dataHeaderInput;
  }

  ngDoCheck(): void {
    if ( this.dataHeaderInput !== undefined ) {
      this.prepareData();
    }
  }

  ngOnInit(): void {
    
  }

   private prepareData() {
    this.flag = this.dataHeaderInput;

  }

}
