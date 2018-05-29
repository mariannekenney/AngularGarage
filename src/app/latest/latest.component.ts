import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { CarObject } from "../car-object.model";
import { GarageApi } from "../garage/garage-api.service";

@Component({
	selector: "app-latest",
	templateUrl: "./latest.component.html",
	styleUrls: ["./latest.component.css"]
})
export class LatestComponent implements OnInit {
	theData: any;
	license: String;

	constructor(private http: HttpClient, private garageApi: GarageApi) {}

	ngOnInit() {
		this.updateLatest();
	}

	async updateLatest() {
		this.theData = await this.garageApi.getLatest();
		this.license = this.theData.license;
	}
}
