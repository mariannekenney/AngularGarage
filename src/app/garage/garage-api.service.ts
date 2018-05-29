import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { CarObject } from "../car-object.model";

@Injectable()
export class GarageApi {
	constructor(private http: HttpClient) {}

	async getCars(): Promise<any> {
		const response = await this.http
			.get("https://mkenney-car-garage.herokuapp.com/cars")
			.toPromise();
		return response;
	}

	async removeCar(url: string): Promise<any> {
		const response = await this.http.delete(url).toPromise();
		return response;
	}

	async addCar(car: CarObject): Promise<any> {
		console.log(car);
		const response = await this.http
			.post("https://mkenney-car-garage.herokuapp.com/car", car)
			.toPromise();
		return response;
	}

	async getLatest(): Promise<any> {
		const response = await this.http
			.get("https://mkenney-car-garage.herokuapp.com/cars/latest")
			.toPromise();
		return response;
	}
}
