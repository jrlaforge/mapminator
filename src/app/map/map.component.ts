import {Component, OnInit} from '@angular/core';
import {MapService} from '../services/map.service';
import {Geometry} from 'wkx';



@Component({
  selector: 'cm-map',
  templateUrl: './map.component.html',
  // template: `<div id="map"></div>`,
  styleUrls: ['./map.component.scss'],
  providers: [MapService]
})
export class MapComponent implements OnInit {
  // map: L.Map ;

  constructor(private mapService: MapService) {
  }

  ngOnInit() {


    //     const map = L.map('map', {
    //       zoomControl: false,
    //        center: [51.505, -0.09],
    //       zoom: 12,
    //       minZoom: 4,
    //       maxZoom: 19
    //       // layers: [this.mapService.baseMaps.OpenStreetMap]
    //     });
    // // this.map = L.map('map', {
    // //   center: [51.505, -0.09],
    // //   zoom: 13
    // // });
    // //
    // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //   attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    // }).addTo(map);
  }

  ngAfterViewInit(){
     this.mapService.initialize();
     let geometry = Geometry.parse('POINT(125.6, 10.1)').toGeoJSON();
     this.mapService.showBoundary(geometry);
  }

}
