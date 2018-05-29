import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { CarObject } from "../car-object.model";

@Component({
	selector: "app-latest",
	templateUrl: "./latest.component.html",
	styleUrls: ["./latest.component.css"]
})
export class LatestComponent implements OnInit {
	theData: CarObject = new CarObject();
	license: string;

	constructor(private http: HttpClient) {}

	ngOnInit() {
		this.updateLatest();
	}

	updateLatest() {
		this.http
			.get("https://mkenney-car-garage.herokuapp.com/cars/latest")
			.subscribe(data => {
				console.log(data);
				this.theData = data;
				this.license = this.theData.license;
			});
	}
}
