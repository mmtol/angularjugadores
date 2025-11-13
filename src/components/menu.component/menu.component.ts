import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Equipo } from '../../models/Equipo';
import ServiceFutbol from '../../services/service.futbol';
import { Router } from '@angular/router';

@Component
({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit
{
  public equipos!:Array<Equipo>;
  public nombre!:string;

  @ViewChild("cajaNombre") cajaNombre:ElementRef;

  constructor(private _service:ServiceFutbol,
              private _router:Router)
  {
    this.cajaNombre = new ElementRef("");
  }

  ngOnInit(): void 
  {
    this._service.getEquipos().then(response =>
    {
      this.equipos = response;
    })
  }

  buscarJugadores()
  {
    let nombre = this.cajaNombre.nativeElement.value;
    this._router.navigate(["/jugadores", nombre]);
  }
}
