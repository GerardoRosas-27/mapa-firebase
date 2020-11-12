import { Component, OnInit } from '@angular/core';
import { marcadores } from 'src/app/models/mapa';



@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  lat = 19.428408
  long = -99.137162;
  zoom = 13;

  dataMarker: marcadores[] =
    [
      {
       
        lat: 19.426627,
        long: -99.107121
      },
      {
        lat: 19.410842,
        long: -99.114416
      }
    ]


  constructor() { }

  ngOnInit(): void {
  }



}
