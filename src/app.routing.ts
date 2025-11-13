import { Routes } from "@angular/router";
import { RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from "./components/home.component/home.component";
import { DatosEquipoComponent } from "./components/datos-equipo.component/datos-equipo.component";
import { JugadoresComponent } from "./components/jugadores.component/jugadores.component";

const appRoutes:Routes=
[
    {
        path:"",
        component:HomeComponent
    },
    {
        path:"datosequipo/:idEquipo",
        component:DatosEquipoComponent
    },
    {
        path:"jugadores/:nombre",
        component:JugadoresComponent
    }
]

export const appRoutingProvider: any[] = [];

export const routing:ModuleWithProviders<any> =
RouterModule.forRoot(appRoutes);