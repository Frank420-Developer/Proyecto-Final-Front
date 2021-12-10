import { Directive, Output, HostListener, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appDragAndDropZone]'
})
export class DragAndDropZoneDirective {
  @Output() private uploadedFiles: EventEmitter<File> = new EventEmitter();

  constructor() { }

  /**
   * @description Método encargado de procesar eventos inesperados al momento de la carga de la imagen.
   * @param evt Imagen adjunta
   */
  @HostListener('dragover', ['$event']) public onDragOver( evt: any ) {
    evt.preventDefault();
    evt.stopPropagation();
  }


  /**
   * @description Método encargado de procesar eventos inesperados al momento de la carga de la imagen.
   * @param evt Imagen adjunta
   */
  @HostListener('dragleave', ['$event']) public onDragLeave( evt: any ) {
    evt.preventDefault();
    evt.stopPropagation();
  }

  /**
   * @description Método para la captura del archivo por medio de la acción drop.
   * @param evt (any) Archivo adjunto
   */
  @HostListener('drop', ['$event']) public onDrop( evt: any ) {
    evt.preventDefault();

    const file = evt.dataTransfer.files;

    if ( file.length > 0 ) {
      this.uploadedFiles.emit(file);
    }
  }

}