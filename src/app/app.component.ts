import { Component } from '@angular/core';
import { AgmMap, AgmMarker } from '@agm/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'My first angular2-google-maps project';
  lat: number = 51.678418;
  lng: number = 7.809007;
  zoom: number = 3;
  radius: number = 100000;
  maxRadius: number = 1000000;
  minRadius: number = 50000;
  scale: number = 1.2;
  constructor() {
    setInterval(this.animateRadius.bind(this), 42)
  }

  animateRadius() {
    if (this.scale == 1.2 && this.radius > this.maxRadius) {
      this.scale = 0.8
    } else if (this.scale == 0.8 && this.radius < this.minRadius) {
      this.scale = 1.2
    }
    this.radius *= this.scale
  }
}
