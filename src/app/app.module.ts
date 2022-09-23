import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './component/log-in/log-in.component';

import { DataService } from "./services/data.service";
import { NavigationComponent } from './component/navigation/navigation.component';
import { InicioComponent } from './component/inicio/inicio.component';
import { LogoutComponent } from './component/logout/logout.component';
import { ListarComponent } from './component/listar/listar.component';
import { AgregarComponent } from './component/agregar/agregar.component';
import { ActualizarComponent } from './component/actualizar/actualizar.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    NavigationComponent,
    InicioComponent,
    LogoutComponent,
    ListarComponent,
    AgregarComponent,
    ActualizarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
