import { Component } from '@angular/core';
import { AgmMap, AgmMarker } from '@agm/core';
import { environment } from 'environments/environment';

import { Location } from 'app/models/location';
import { LocationService } from 'app/services/Location.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  locations: Location[];
  title: string = 'My first angular2-google-maps project';
  lat: number = 51.678418;
  lng: number = 7.809007;
  zoom: number = 3;
  radius: number = 100000;
  maxRadius: number = 200000;
  minRadius: number = 50000;
  scale: number = 1.1;

  constructor(private locationService: LocationService) {
    locationService.getTopLocations(10)
      .subscribe(
        response => {
          console.log(response.status + ": " + response.message);
          this.locations = response.data;
          for (var key in this.locations) {
            let location = this.locations[key];
          }
        },
        error => {
          console.log("Error");
          console.log(error);
        }
      )
  }
}
