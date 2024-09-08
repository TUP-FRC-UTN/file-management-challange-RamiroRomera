import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormArchivoComponent } from "./form-archivo/form-archivo.component";
import { FileItem, FileOwner } from '../models/file.item.model';
import { FILE_LIST } from '../data/file.storage';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormArchivoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'file-management-challenge';

  listaArchivos : FileItem[] = FILE_LIST

  mostrarFecha(fecha: Date) {
    return fecha.getDay()+1 + "/" + fecha.getMonth() + "/" + fecha.getFullYear()
  }

  pushearArchivo(archivo: FileItem) {
    this.listaArchivos.push(archivo)
  }
}
