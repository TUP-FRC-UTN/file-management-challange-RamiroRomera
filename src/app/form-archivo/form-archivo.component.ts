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
  
  //#region Declaracion de variables
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
  //#endregion
  
  //#region Interaccion y Variables ComboBox
  listDuenios: FileOwner[] = OWNERS;

  tiposArchivos = Object
                  .values(FileType)
                  .filter(value => typeof value === "string");
  

  agregarDuenio() {
    // console.log(this.duenioSeleccionado)
    // console.log(this.duenioSeleccionado.name)
    // console.log(this.duenioSeleccionado.avatarUrl)
    if (!this.nuevoArchivo.owners.includes(this.duenioSeleccionado) && this.duenioSeleccionado.name != "") {
      this.nuevoArchivo.owners.push(this.duenioSeleccionado);
      console.log(this.nuevoArchivo.owners.length)
    }
  }

  eliminarDuenio(index: number) {
    this.nuevoArchivo.owners.splice(index, 1);
  }
  //#endregion

  sendForm(form: NgForm) {
    // console.log(this.nuevoArchivo.owners.length)
    // console.log(this.nuevoArchivo.owners)
    // console.log(this.nuevoArchivo)
    // console.log(form.valid)
    // this.archivoEmitter.emit(this.nuevoArchivo)
    if (form.valid) {
      this.archivoEmitter.emit(this.nuevoArchivo)
      this.nuevoArchivo.name = ""
      this.nuevoArchivo.owners = []
      this.nuevoArchivo.type = FileType.FILE
      this.nuevoArchivo.creation = new Date()
      this.duenioSeleccionado.name = ""
      this.duenioSeleccionado.avatarUrl = ""
    }
  }
}
