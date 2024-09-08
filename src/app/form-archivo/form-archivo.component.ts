import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FileItem, FileOwner, FileType } from '../../models/file.item.model';
import { FormsModule, NgForm } from '@angular/forms';
import { OWNERS } from '../../data/file.storage';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-archivo',
  standalone: true,
  imports: [ FormsModule, CommonModule ],
  templateUrl: './form-archivo.component.html',
  styleUrl: './form-archivo.component.css'
})
export class FormArchivoComponent {
  @Output() archivoEmitter : EventEmitter<FileItem> = new EventEmitter<FileItem>();
  
  nuevoArchivo : FileItem = {
    id: '',
    name: '',
    creation: new Date(),
    owners: [],
    type: FileType.FILE,
    parentId: undefined 
  }

  duenioSeleccionado : FileOwner = {
    name: "",
    avatarUrl: ""
  }

  listDuenios: FileOwner[] = OWNERS;

  tiposArchivos = Object
                  .values(FileType)
                  .filter(value => typeof value === "string");


  emitirArchivo() {
    this.nuevoArchivo.creation = new Date()
    this.archivoEmitter.emit(this.nuevoArchivo)
  }

  agregarDuenio() {
    console.log(this.duenioSeleccionado)
    console.log(this.duenioSeleccionado.name)
    console.log(this.duenioSeleccionado.avatarUrl)
    if (!this.nuevoArchivo.owners.includes(this.duenioSeleccionado)) {
      this.nuevoArchivo.owners.push(this.duenioSeleccionado);
    }
  }

  eliminarDuenio(index: number) {
    this.nuevoArchivo.owners.splice(index, 1);
  }

  sendForm(form: NgForm) {
    if (form.valid) {
      
    }
  }
}
