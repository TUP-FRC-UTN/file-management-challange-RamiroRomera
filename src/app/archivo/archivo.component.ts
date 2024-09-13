import { Component, Output, Input, EventEmitter } from '@angular/core';
import { FileItem, FileType } from '../../models/file.item.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-archivo',
  standalone: true,
  imports: [ FormsModule, CommonModule ],
  templateUrl: './archivo.component.html',
  styleUrls: ['./archivo.component.css']
})
export class ArchivoComponent {
  seleccionado : boolean = false
  folder: FileType = FileType.FOLDER
  file: FileType = FileType.FILE

  @Input() archivo: FileItem = {
    id: "1",
    name: "rami",
    creation: new Date(),
    owners: [],
    type: FileType.FILE
  }

  @Output() archivoSeleccionado: EventEmitter<string> = new EventEmitter<string>()

  enviarSeleccionado(){
    this.archivoSeleccionado.emit(this.archivo.id)
  }

  mostrarFecha(fecha: Date) {
    const day = fecha.getDate()
    const month = fecha.getMonth() + 1
    return day + "/" + month + "/" + fecha.getFullYear()
  }
}
