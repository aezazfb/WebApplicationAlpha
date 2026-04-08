import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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

  constructor(private vehicleService: VehicleService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.loadVehicles();
  }

  loadVehicles() {
    this.vehicleService.getVehicles()
      .subscribe({
        next: data => {
          this.vehicles = [...data];
          this.cdr.detectChanges();
        },
        error: err => console.log(err)
      });
  }


  addVehicle() {
    console.log(this.newVehicle);
    if (!this.newVehicle.make || !this.newVehicle.model) {
      alert("Input error, check values!");
    };
    // debugger


    this.vehicleService.addVehicle(this.newVehicle)
      .subscribe({
        next: res => {
          console.log("API hitt post");
          setTimeout(() => {
            this.loadVehicles();
            this.newVehicle = {
              make: '',
              model: '',
              year: new Date().getFullYear()
            };
          }, 400);
        },
        error: (err) => {
          console.log(err)
        }
      });
  }
}
