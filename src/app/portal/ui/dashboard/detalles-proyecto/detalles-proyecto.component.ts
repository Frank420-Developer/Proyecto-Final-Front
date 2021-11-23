import { Component, OnInit } from '@angular/core';

/* Importaciones de formulario */
import { Validators, FormBuilder, FormGroup, AbstractControl } from '@angular/forms';

/* Importación de servicios */
import { ProjectListServiceService } from 'src/app/data/network/proyectos/project-list-service.service';

/* Importacion de interfaces */
import { ProjectDetail } from '../../../../data/models/response/projects/Projects';

/* Importanción de constantes */
import * as TextsES from '../../../utilis/TextsConstantsES';

@Component({
  selector: 'app-detalles-proyecto',
  templateUrl: './detalles-proyecto.component.html',
  styleUrls: ['./detalles-proyecto.component.scss']
})
export class DetallesProyectoComponent implements OnInit {

  // Textos
  public textEs = TextsES.PROJECTS.SUBMENU;
  private textLabel = TextsES.INPUTS;
  public searchLabel: string;

  // Form
  public searchGroupForm: FormGroup;
  public searchInput: AbstractControl;

  constructor( private formBuilder: FormBuilder,
               private projectService: ProjectListServiceService, ) {

    this.searchLabel = this.textLabel.SEARCH;

    this.searchGroupForm = this.formBuilder.group({
      searchInput: ['', Validators.required]
    });

    this.searchInput = this.searchGroupForm.controls.searchInput;
  }

  ngOnInit(): void {
  }

  public searchValue() {
  }

  private getProjectDetail( clientID: string, id: string, position: number ) {
    this.projectService.getProjectDetail(clientID, id).subscribe( (data: ProjectDetail) => {
      try {

      } catch (err) {
      }
    }, errorResponse => {
      console.error('Error en el respuesta ', errorResponse);
    } );
  }

}
