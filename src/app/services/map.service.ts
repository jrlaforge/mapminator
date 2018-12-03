import { Injectable } from '@angular/core';
import { Map, GeoJSON } from 'leaflet';
import * as L from 'leaflet';


@Injectable()
export class MapService {
  public map: Map;
  private currentLayer: GeoJSON;

  constructor() {

  }

  initialize() {
    if (this.map) {
      return;
    }

    this.map = L.map('map', {
        zoomControl: true,
            center: [51.505, -0.09],
      zoom: 13

    });
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    // L.control.scale().addTo(this.map);
  }

  showBoundary(geometry) {
    this.clear();

    let featureCollection: GeoJSON.FeatureCollection<any> = {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          geometry: geometry,
          properties: {}
        }
      ]
    };

    this.currentLayer = L.geoJSON(featureCollection, {
      style: () => {
        return {
          color: '#3F51B5',
          fillColor: '#3F51B5'
        };
      }
    }).addTo(this.map);

    this.map.fitBounds(this.currentLayer.getBounds());
  }

  clear() {
    if (this.currentLayer) {
      this.map.removeLayer(this.currentLayer);
      this.currentLayer = undefined;
    }
  }
}
