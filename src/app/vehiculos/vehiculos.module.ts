import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarVehiculoComponent } from './listar-vehiculo/listar-vehiculo.component';

@NgModule({
  declarations: [
    ListarVehiculoComponent // Declara el componente aquí
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListarVehiculoComponent // Exporta el componente para usarlo en otros módulos
  ]
})
export class VehiculosModule { }
