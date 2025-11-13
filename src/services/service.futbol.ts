import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../environments/environment.development";

@Injectable()
export default class ServiceFutbol
{
    constructor(private _http:HttpClient){}

    getEquipos():Promise<any>
    {
        let url = environment.futbol;
        let endPoint = "api/Equipos";
        let promise = new Promise((resolve) =>
        {
            this._http.get(url+endPoint).subscribe(response =>
            {
                resolve(response);
            })
        })

        return promise;
    }

    findEquipo(idEquipo:number):Promise<any>
    {
        let url = environment.futbol;
        let endPoint = "api/Equipos/"+idEquipo;
        let promise = new Promise((resolve) =>
        {
            this._http.get(url+endPoint).subscribe(response =>
            {
                resolve(response);
            })
        })

        return promise;
    }

    getJugadoresEquipo(idEquipo:number):Promise<any>
    {
        let url = environment.futbol;
        let endPoint = "api/Jugadores/JugadoresEquipo/"+idEquipo;
        let promise = new Promise((resolve) =>
        {
            this._http.get(url+endPoint).subscribe(response =>
            {
                resolve(response);
            })
        })

        return promise;
    }

    findJugadores(nombre:string):Promise<any>
    {
        let url = environment.futbol;
        let endPoint = "api/Jugadores/BuscarJugadores/"+nombre;
        let promise = new Promise((resolve) =>
        {
            this._http.get(url+endPoint).subscribe(response =>
            {
                resolve(response);
            })
        })

        return promise;
    }
}