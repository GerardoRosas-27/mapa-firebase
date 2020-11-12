import { Component, OnInit } from '@angular/core';
import { marcadores, Marker, ResponseApi } from 'src/app/models/mapa';
import { MapaService } from 'src/app/services/mapa.service';



@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  statusMapa: boolean = false;
  lat = 19.428408
  long = -99.137162;
  zoom = 13;
  openedWindow: number = 0;

  dataMarker: Marker[];

  constructor(private mapaService: MapaService) { }

  ngOnInit(): void {
    this.getMarkers();
  }

  openWindow(id) {
    this.openedWindow = id;
  }

  isInfoWindowOpen(id) {
    return this.openedWindow == id;
  }

  getMarkers() {
    this.dataMarker = [];
    this.mapaService.getMarkers().subscribe(
      (result: ResponseApi) => {
        
        this.dataMarker = result.records;
        console.log("marcadores: ", result);
        this.statusMapa = true;
      }, error => {
        console.log("error al cargar los marcadores: ", error);
      }
    )
  }


}
