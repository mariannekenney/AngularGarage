import { Component, OnInit, Input } from "@angular/core";

import { CarObject } from "../car-object.model";
import { GarageApi } from "../garage/garage-api.service";

@Component({
	selector: "app-latest",
	templateUrl: "./latest.component.html",
	styleUrls: ["./latest.component.css"]
})
export class LatestComponent implements OnInit {
	@Input() license: String;

	constructor(private garageApi: GarageApi) {}

	ngOnInit() {}
}
