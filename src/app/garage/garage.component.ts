import {
	Component,
	OnInit,
	Output,
	Input,
	EventEmitter,
	Inject
} from "@angular/core";

import { DatePipe } from "@angular/common";

import { CarObject } from "../car-object.model";
import { GarageApi } from "../garage/garage-api.service";

@Component({
	selector: "app-garage",
	templateUrl: "./garage.component.html",
	styleUrls: ["./garage.component.css"]
})
export class GarageComponent implements OnInit {
	@Input() cars: CarObject[];
	@Output() updateEvent = new EventEmitter();

	allowEdit: boolean[] = [];

	constructor(private garageApi: GarageApi) {}

	ngOnInit() {
		this.allowEdit = new Array(this.cars.length);
		for (let i: number = 0; i < this.cars.length; i++) {
			this.allowEdit[i] = false;
		}
		console.log(this.allowEdit);
	}

	async removeCar(car: CarObject) {
		this.cars = await this.garageApi.removeCar(
			`https://mkenney-car-garage.herokuapp.com/car/${car.id}`
		);
		this.updateEvent.emit();
	}

	editCar(i: number) {
		this.allowEdit[i] = true;
		this.updateEvent.emit();
	}

	async saveCar(i, car: CarObject) {
		this.allowEdit[i] = false;
		this.cars = await this.garageApi.editCar(
			`https://mkenney-car-garage.herokuapp.com/car/${car.id}`,
			car
		);
		this.updateEvent.emit();
	}
}
