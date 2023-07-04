import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoundedBlockDirective } from './directives/rounded-block.directive';
import { DraggableDirective } from './directives/draggable.directive';
import { ListAlumnosComponent } from './list-alumnos/list-alumnos.component';


@NgModule({
  declarations: [
    AppComponent,
    RoundedBlockDirective,
    DraggableDirective,
    ListAlumnosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
