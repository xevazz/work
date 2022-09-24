import { Component,HostBinding,Inject, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service";

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})

export class ListarComponent implements OnInit {
  @HostBinding('class') clases = "row";
  lista: any;
  constructor(private DataService:DataService) { }
  
  ngOnInit(): void {
    this.getLista();
  }

  getLista(){
    this.DataService.listar().subscribe(
      res => {
        this.lista = res;
      },
      err => console.error(err)
    );
  }
  eliminarUsuario(id: string){
    this.DataService.eliminar(id).subscribe(
      res=>{
        console.log(res),
        this.getLista()
      },
      err=>console.error(err)
    )
  }
}

