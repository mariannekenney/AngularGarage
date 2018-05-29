import { Component, OnInit, Output, EventEmitter } from "@angular/core";

import { CarObject } from "./car-object.model";
import { GarageApi } from "./garage/garage-api.service";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"]
})
export class AppComponent {
	cars: CarObject[];
	latestCar: CarObject;
	latestLicense: String;

	constructor(private garageApi: GarageApi) {}

	ngOnInit() {
		this.update();
	}

	async update() {
		this.cars = await this.garageApi.getCars();
		this.latestCar = await this.garageApi.getLatest();
		this.latestLicense = this.latestCar.license;
	}
}
