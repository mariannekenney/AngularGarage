import {
	Component,
	OnInit,
	Output,
	Input,
	EventEmitter,
	Inject
} from "@angular/core";

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

	constructor(private garageApi: GarageApi) {}

	ngOnInit() {}

	async removeCar(car: CarObject) {
		this.cars = await this.garageApi.removeCar(
			`https://mkenney-car-garage.herokuapp.com/car/${car.id}`
		);
		this.updateEvent.emit();
	}
}
