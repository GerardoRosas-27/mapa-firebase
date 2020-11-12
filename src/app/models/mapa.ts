export class Mapa {
}

export interface marcadores {
    id: number;
    lat: number;
    long: number;
    name: string;
    descripcion: string;
}
interface fields {
    color: string
    alcaldia: string;
    region: string;
    geo_point_2d: number[];
    lat: string;
    long: string;
    label: string;
    geo_shape: {
        type: string;
        coordinates: number[];
    },
    nombre: string;
}
interface geometry {
    type: string;
    coordinates: number[];
}

export interface Marker {
    datasetid: string;
    recordid: string;
    fields: fields,
    geometry:geometry,
    record_timestamp: string;
}
export interface ResponseApi{
    nhits: number;
    parameters: {
        dataset: string;
        timezone: string;
        rows: string;
        start: number;
        format: string;
    };
    records: Marker[];
}

