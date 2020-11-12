import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Marker, ResponseApi } from 'src/app/models/mapa';
import { LoginService } from 'src/app/services/login.service';
import { MapaService } from 'src/app/services/mapa.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  @Output() logeado: EventEmitter<boolean> = new EventEmitter<boolean>();
  statusMapa: boolean = false;
  lat = 19.428408
  long = -99.137162;
  zoom = 13;
  openedWindow: number = 0;

  dataMarker: Marker[];

  constructor(private mapaService: MapaService, private loginService: LoginService) { }

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
  onCerrarSesion(){
    console.log("secion cerrada");
   this.loginService.signOut();
    this.logeado.emit(false);
  }


}
