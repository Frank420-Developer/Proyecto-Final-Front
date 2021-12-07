import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

/* Angular Material */
import { MatDialog } from '@angular/material/dialog';

/* Importaciones de formulario */
import { Validators, FormBuilder, FormGroup, AbstractControl } from '@angular/forms';

/* Interfaces */
import { HeaderModel } from 'src/app/data/models/local/InputsModels';
import { DIALOG_WIDTH_XL } from 'src/app/portal/utilis/ConstantsApp';

@Component({
  selector: 'app-general-header',
  templateUrl: './general-header.component.html',
  styleUrls: ['./general-header.component.scss']
})
export class GeneralHeaderComponent implements OnInit {
  @Input() dataInput: HeaderModel;
  @Output() updateTable = new EventEmitter<boolean>();
  @Output() searchValue = new EventEmitter<string>();

  // Text
  public txtTitle: string;
  public searchLabel: string;
  public searchButtonLabel: string;

  // Form
  public searchGroupForm: FormGroup;
  public searchInput: AbstractControl;

  // Flags
  public flagButton: boolean;
  public flagSearch: boolean;

  constructor( private formBuilder: FormBuilder,
               private dialogController: MatDialog, ) {

    // Construccion de formulario
    this.searchGroupForm = this.formBuilder.group({
      searchInput: ['', Validators.required ]
    });

    this.searchInput = this.searchGroupForm.controls.searchInput;
  }

  ngOnInit(): void {
    this.txtTitle = this.dataInput.TITLE;
    this.searchLabel = this.dataInput.TEXT_PLACEHOLDER;
    this.searchButtonLabel = this.dataInput.TEXT_ADD_BUTTON;

    this.flagButton = this.dataInput.FLAG_ACTIVE_BUTTON;
    this.flagSearch = this.dataInput.FLAG_ACTIVE_SEARCH;
  }

  public openDialog() {
    const dialog = this.dialogController.open(this.dataInput.COMPONENT_DIALOG, {
      disableClose: true,
      width: ( this.dataInput.WIDTH_DIALOG === null ) ? DIALOG_WIDTH_XL : this.dataInput.WIDTH_DIALOG,
    });


    dialog.afterClosed().subscribe((dialogClose: boolean) => {
      this.updateTable.emit(dialogClose);
    });
  }

  public searchValueEnter(): void {
    this.searchValue.emit(this.searchInput.value);
  }

}
