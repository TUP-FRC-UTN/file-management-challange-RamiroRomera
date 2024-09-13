import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormArchivoComponent } from "./form-archivo/form-archivo.component";
import { FileItem } from '../models/file.item.model';
import { FILE_LIST } from '../data/file.storage';
import { CommonModule } from '@angular/common';
import { ArchivoComponent } from './archivo/archivo.component';
import { FormsModule } from '@angular/forms';
import { elementAt } from 'rxjs';

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
  accionSeleccionada : string = ""
  mostrarForm : boolean = false

  pushearArchivo(archivo: FileItem) {
    this.listaArchivos.push(archivo)
    this.mostrarForm = false
  }

  agregarEliminado(id: string) {
    this.archivosEliminar.push(id)
  }

  eliminarArchivos() {
    if (this.archivosEliminar.length >= 1) {
      this.listaArchivos = this.listaArchivos.filter(archivo => !this.archivosEliminar.includes(archivo.id));
      
      this.archivosEliminar = [];
      console.log("Archivos eliminados!!")
    }
  }

  accionCambia() {
    console.log(this.accionSeleccionada)
    if (this.accionSeleccionada == "nuevo") {
      this.mostrarForm = true
    } else if (this.accionSeleccionada == "borrar") {
      this.eliminarArchivos()
    }
  }
}
