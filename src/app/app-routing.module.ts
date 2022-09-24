import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LogInComponent } from "./component/log-in/log-in.component";
import { InicioComponent} from "./component/inicio/inicio.component";
import { AgregarComponent } from "./component/agregar/agregar.component";
import { ActualizarComponent } from "./component/actualizar/actualizar.component";



const routes: Routes = [
  { 
    path:'',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { 
    path:'inicio',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path:'login',
    component:LogInComponent
  },
  {
    path:'inicio',
    component:InicioComponent
  },
  {
    path:'add',
    component:AgregarComponent
  },
  {
    path:'inicio/id',
    component:ActualizarComponent
  },
  
];

if (sessionStorage.getItem('id')!=null) {
  routes[0] =   { 
    path:'',
    redirectTo: '/inicio',
    pathMatch: 'full'
  };
  routes[1] =   { 
    path:'inicio',
    redirectTo: '/inicio',
    pathMatch: 'full'
  };

}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
