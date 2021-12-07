import { Component, Input, OnInit } from '@angular/core';

/* Importaciones de formulario */
import { Validators, FormBuilder, FormGroup, AbstractControl } from '@angular/forms';

/* Importación de servicios */
import { ProjectListServiceService } from 'src/app/data/network/proyectos/project-list-service.service';

/* Importacion de interfaces */
import { ProjectDetail } from 'src/app/data/models/response/projects/Projects';

/* Importanción de constantes */
import * as TextsES from '../../../utilis/TextsConstantsES';
import { SecondHeaderModel } from 'src/app/data/models/local/InputsModels';

@Component({
  selector: 'app-second-header',
  templateUrl: './second-header.component.html',
  styleUrls: ['./second-header.component.scss']
})
export class SecondHeaderComponent implements OnInit {
  @Input() dataHeaderInput: SecondHeaderModel;

  // Form
  public searchGroupForm: FormGroup;
  public searchInput: AbstractControl;

  constructor( private formBuilder: FormBuilder ) {

    this.searchGroupForm = this.formBuilder.group({
      searchInput: ['', Validators.required]
    });

    this.searchInput = this.searchGroupForm.controls.searchInput;
  }

  ngOnInit(): void {
    console.log('Header', this.dataHeaderInput);
  }

  public searchValue() {
  }

}
