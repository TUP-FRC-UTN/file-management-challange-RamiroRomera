import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormArchivoComponent } from "./form-archivo/form-archivo.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormArchivoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'file-management-challenge';
}
