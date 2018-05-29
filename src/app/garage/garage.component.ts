import { Component, OnInit, Output, EventEmitter, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { LatestComponent } from "../latest/latest.component";
import { CarObject } from "../car-object.model";
import { GarageApi } from "../garage/garage-api.service";

@Component({
	selector: "app-garage",
	templateUrl: "./garage.component.html",
	styleUrls: ["./garage.component.css"]
})
export class GarageComponent implements OnInit {
	theData: CarObject[];

	@Output() updateEvent = new EventEmitter();

	constructor(private http: HttpClient, private garageApi: GarageApi) {}

	ngOnInit() {
		this.updateData();
	}

	async removeCar(car: CarObject) {
		this.theData = await this.garageApi.removeCar(
			`https://mkenney-car-garage.herokuapp.com/car/${car.id}`
		);
		this.updateData();
	}

	async updateData() {
		this.theData = await this.garageApi.getCars();
		this.sendUpdate();
	}

	sendUpdate() {
		this.updateEvent.emit();
	}
}
