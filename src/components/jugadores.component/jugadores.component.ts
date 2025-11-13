import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';
import { OnInit } from '@angular/core';
import { Jugador } from '../../models/Jugador';
import ServiceFutbol from '../../services/service.futbol';

@Component
({
  selector: 'app-jugadores',
  standalone: false,
  templateUrl: './jugadores.component.html',
  styleUrl: './jugadores.component.css',
})
export class JugadoresComponent implements OnInit
{
  public jugadores!:Array<Jugador>;

  constructor(private _activeRoute:ActivatedRoute,
              private _service:ServiceFutbol) {}

  ngOnInit(): void 
  {
    this._activeRoute.params.subscribe((parametros:Params)=>
    {
      if (parametros["nombre"] != null)
      {
        let nombre = parametros["nombre"];

        this._service.findJugadores(nombre).then(response =>
        {
          this.jugadores = response;
        })
      }
    })
  }
}
