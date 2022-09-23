import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LogInComponent } from "./component/log-in/log-in.component";
import { InicioComponent} from "./component/inicio/inicio.component";
import { AgregarComponent } from "./component/agregar/agregar.component";
const routes: Routes = [
  {
    path:'',
    redirectTo: '/inicio',
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
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
