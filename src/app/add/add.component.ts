import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { CarObject } from "../car-object.model";

@Component({
	selector: "app-add",
	templateUrl: "./add.component.html",
	styleUrls: ["./add.component.css"]
})
export class AddComponent implements OnInit {
	url = "https://mkenney-car-garage.herokuapp.com/car";
	car: CarObject = new CarObject();

	@Output() addEvent = new EventEmitter();

	constructor(private http: HttpClient) {}

	onSubmit() {
		console.log(this.car);
		this.http.post(this.url, this.car).subscribe(res => this.sendAdd());
	}

	sendAdd() {
		this.addEvent.emit();
	}

	ngOnInit(): void {}
}
