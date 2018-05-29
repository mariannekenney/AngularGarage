import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { CarObject } from "../car-object.model";
import { GarageApi } from "../garage/garage-api.service";

@Component({
	selector: "app-add",
	templateUrl: "./add.component.html",
	styleUrls: ["./add.component.css"]
})
export class AddComponent implements OnInit {
	url = "https://mkenney-car-garage.herokuapp.com/car";
	car: CarObject = new CarObject();

	@Output() addEvent = new EventEmitter();

	constructor(private http: HttpClient, private garageApi: GarageApi) {}

	async onSubmit() {
		const response = await this.garageApi.addCar(this.car);
		this.sendAdd();
	}

	sendAdd() {
		this.addEvent.emit();
	}

	ngOnInit(): void {}
}
