// src/app/vehiculos/listar-vehiculo/listar-vehiculo.component.ts
import { Component, OnInit } from '@angular/core';
import { VehiculosService } from '../vehiculos.service';
import { Vehiculo } from '../vehiculo.model';
@Component({
    selector: 'app-listar-vehiculo',
    templateUrl: './listar-vehiculo.component.html',
    styleUrls: ['./listar-vehiculo.component.css']
})
export class ListarVehiculoComponent implements OnInit {
    vehiculos: Vehiculo[] = [];

    constructor(private vehiculosService: VehiculosService) {}

    ngOnInit(): void {
        this.vehiculosService.obtenerVehiculos().subscribe((data: Vehiculo[]) => {
            this.vehiculos = data;
        });
    }
}
