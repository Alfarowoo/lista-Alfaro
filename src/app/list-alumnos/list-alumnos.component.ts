import { Component } from '@angular/core';

@Component({
  selector: 'app-list-alumnos',
  templateUrl: './list-alumnos.component.html',
  styleUrls: ['./list-alumnos.component.css']
})
export class ListAlumnosComponent {

  public listAlumnos: string[] = ['María', 'Alberto', 'Juana', 'Sergio', 'Luciana'];
  public deleteAlumno?: string = '';

  removeAlumno(): void {
    this.deleteAlumno = this.listAlumnos.pop();
  }


}
