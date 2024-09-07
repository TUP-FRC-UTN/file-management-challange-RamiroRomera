import { Component, Output, EventEmitter } from '@angular/core';
import { FileItem, FileType } from '../../models/file.item.model';

@Component({
  selector: 'app-archivo-form',
  standalone: true,
  imports: [],
  templateUrl: './archivo-form.component.html',
  styleUrl: './archivo-form.component.css'
})
export class ArchivoFormComponent {
  @Output archivoEmitter : EventEmitter<FileItem> = new EventEmitter<FileItem>()
  nuevoArchivo : FileItem = new FileItem()
  tipoDeArchivoSeleccionado : FileType | undefined
  
  
}
