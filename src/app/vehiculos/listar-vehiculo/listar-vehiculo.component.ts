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
  vehiculosPorMarca: { [marca: string]: number } = {};
  selectedVehicle: Vehiculo | null = null; 


  constructor(private vehiculosService: VehiculosService) {}

  ngOnInit(): void {
    this.vehiculosService.obtenerVehiculos().subscribe({
      next: (data: Vehiculo[]) => {
        this.vehiculos = data;
        this.contarVehiculosPorMarca();
      },
      error: (error) => {
        console.error('Error fetching vehicles:', error);
      }
    });
  }

  contarVehiculosPorMarca(): void {
    this.vehiculosPorMarca = this.vehiculos.reduce((acc, vehiculo) => {
      acc[vehiculo.marca] = (acc[vehiculo.marca] || 0) + 1;
      return acc;
    }, {} as { [marca: string]: number });
  }

  selectVehicle(event: any) {
    const target = event.target;
    const row = target.closest('tr');
    if (row) {
      const index = Array.from(row.parentElement!.children).indexOf(row);
      this.selectedVehicle = this.vehiculos[index];
    }
  }

  handleImageError(event: any): void {
    event.target.src = '/assets/images/placeholder.jpg'; 
    console.error('Error loading image:', event.target.src);
  }
}
