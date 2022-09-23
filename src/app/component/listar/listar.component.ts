import { Component,HostBinding,ViewChild, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service";
import {MatDialog} from '@angular/m';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  @HostBinding('class') clases = "row";
  lista: any;
  constructor(private DataService:DataService) { }
  @ViewChild("myModalInfo", {static: false}) myModalInfo: TemplateRef<any>;
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
}
