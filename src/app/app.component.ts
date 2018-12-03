import { Component } from '@angular/core';
// import { MdDialog } from '@angular/material';
import {Geometry} from 'wkx';
// import { tj } from '@mapbox/togeojson';

@Component({
  selector: 'cm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'carminator';
  test_wkx = Geometry.parse('POINT(1 2)').toGeoJSON();

  // test_wkx = Geometry.parse('POINT(1 2)').toGeoJSON();
}
