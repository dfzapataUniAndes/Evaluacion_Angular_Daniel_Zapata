import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { VehiculosModule } from './vehiculos/vehiculos.module'; // Importa el módulo de vehículos
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; // Importa HttpClientModule



@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    // Otros componentes de AppModule, si los tienes
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    VehiculosModule,
    NgbModule // Añade el módulo aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
