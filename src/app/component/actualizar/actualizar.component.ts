import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service";
import { User } from "../../models/usuario";

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }
  user: User = {
    userId: 0,
    id: 0,
    title:'',
    body:''
  };

  actualizarUsuario(){
    delete this.user.userId;
    delete this.user.id;
    this.dataService.actualizar(this.user).subscribe(
      res=> {
        console.log(res);
      },
      err=> console.error(err)
    )
  }  

}
