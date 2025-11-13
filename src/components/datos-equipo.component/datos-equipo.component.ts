import { Component, OnInit } from '@angular/core';
import { DatosEquipo } from '../../models/DatosEquipo';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';
import ServiceFutbol from '../../services/service.futbol';

@Component
({
  selector: 'app-datos-equipo',
  standalone: false,
  templateUrl: './datos-equipo.component.html',
  styleUrl: './datos-equipo.component.css',
})
export class DatosEquipoComponent implements OnInit
{
  public datos!:DatosEquipo;

  constructor(private _service:ServiceFutbol,
              private _activeRoute:ActivatedRoute){}

  ngOnInit(): void 
  {
    this._activeRoute.params.subscribe((parametros:Params)=>
    {
      if (parametros["idEquipo"] != null)
      {
        let idEquipo = parametros["idEquipo"];

        this._service.getDatosEquipo(idEquipo).then(response =>
        {
          this.datos = response;
        }) 
      }
    })
  }
}
