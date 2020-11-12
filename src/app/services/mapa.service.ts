import { HttpClient } from '@angular/common/http';
import { Injectable, } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapaService {

  constructor(private http: HttpClient) { }

  getMarkers(){
    return this.http.get("https://datos.cdmx.gob.mx/api/records/1.0/search/?dataset=ubicacion_c5_c2&q=");
 }
}

