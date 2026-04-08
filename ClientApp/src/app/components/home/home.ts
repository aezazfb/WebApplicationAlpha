import { Component, OnInit } from '@angular/core';
import { Vehicle, VehicleService } from '../../services/vehicle.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {

  vehicles: Vehicle[] = [];

  newVehicle: Vehicle = {
    make: '',
    model: '',
    year: new Date().getFullYear()
  };

  constructor(private vehicleService: VehicleService) { }

  ngOnInit(): void {
    this.loadVehicles();
  }

  loadVehicles() {
    this.vehicleService.getVehicles()
      .subscribe(data => this.vehicles = data);
  }

  addVehicle() {
    if (!this.newVehicle.make || !this.newVehicle.model) return;

    this.vehicleService.addVehicle(this.newVehicle)
      .subscribe(() => {
        this.loadVehicles();
        this.newVehicle = {
          make: '',
          model: '',
          year: new Date().getFullYear()
        };
      });
  }
}
