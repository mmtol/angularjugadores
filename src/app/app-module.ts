import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MenuComponent } from '../components/menu.component/menu.component';
import { HomeComponent } from '../components/home.component/home.component';
import { DatosEquipoComponent } from '../components/datos-equipo.component/datos-equipo.component';
import { JugadoresComponent } from '../components/jugadores.component/jugadores.component';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { routing } from '../app.routing';
import { appRoutingProvider } from '../app.routing';
import ServiceFutbol from '../services/service.futbol';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

@NgModule({
  declarations: 
  [
    App,
    MenuComponent,
    HomeComponent,
    DatosEquipoComponent,
    JugadoresComponent
  ],
  imports: 
  [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    routing
  ],
  providers: 
  [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    provideBrowserGlobalErrorListeners(),
    ServiceFutbol,
    appRoutingProvider
  ],
  bootstrap: [App]
})
export class AppModule { }
