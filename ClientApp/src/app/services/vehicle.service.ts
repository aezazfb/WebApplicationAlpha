import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Vehicle {
    make: string;
    model: string;
    year: number;
}

@Injectable({
    providedIn: 'root'
})
export class VehicleService {

    private apiUrl = 'http://localhost:5262/api/Vehicles'; // IMPORTANT: use relative path

    constructor(private http: HttpClient) { }

    getVehicles(): Observable<Vehicle[]> {
        return this.http.get<Vehicle[]>(this.apiUrl);
    }

    addVehicle(vehicle: Vehicle): Observable<any> {
        return this.http.post(this.apiUrl, vehicle);
    }
}