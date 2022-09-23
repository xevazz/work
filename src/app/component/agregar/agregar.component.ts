import { Component,HostBinding, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service";
import { User } from "../../models/usuario";

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  @HostBinding('class') clases = "row";

  user: User = {
    userId: 0,
    id: 0,
    title:'',
    body:''
  };
  constructor(private dataService:DataService) { }
  public bool: any;
  ngOnInit(): void {
  }
  
  guardarNuevoUsuario(){
    delete this.user.userId;
    delete this.user.id;
    this.dataService.crearNuevo(this.user).subscribe(
      res=> {
        console.log(res);
        this.bool=false;

      },
      err=> console.error(err)
    )
  }


}
