import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { CarObject } from "../car-object.model.ts";

@Injectable()
export class GarageApi {
	constructor(private http: HttpClient) {}

	async getCars(): Promise<any> {
		const response = await this.http
			.get("https://mkenney-car-garage.herokuapp.com/cars")
			.toPromise();
		return response;
	}

	async removeCar(url: string, car: CarObject): Promise<any> {
		console.log(car.id);
		const response = await this.http.delete(url, car).toPromise();
		return response;
	}
}
