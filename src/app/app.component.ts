import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormArchivoComponent } from "./form-archivo/form-archivo.component";
import { FileItem } from '../models/file.item.model';
import { FILE_LIST } from '../data/file.storage';
import { CommonModule } from '@angular/common';
import { ArchivoComponent } from './archivo/archivo.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormArchivoComponent, CommonModule, FormsModule, ArchivoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'file-management-challenge';

  listaArchivos : FileItem[] = FILE_LIST
  archivosEliminar : string[] = []

  pushearArchivo(archivo: FileItem) {
    this.listaArchivos.push(archivo)
  }
}
