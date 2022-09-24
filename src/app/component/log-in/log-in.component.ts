import { Component, HostBinding,OnInit } from '@angular/core';

import { DataService } from "../../services/data.service";


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  @HostBinding('class') clases = "row";
  respuesta:any;
  id: any;
  pass: any;
  

  constructor(private dataService: DataService) { }


  ngOnInit(): void {
    
  }

  confirmLogin(id: string,pass: string){
    this.dataService.login(id,pass).subscribe(
      res => {
        this.respuesta = res;
        sessionStorage.setItem('userDetails', 'sad');
        console.log(sessionStorage.getItem('id'));
      },
      err => {console.error(err);
        sessionStorage.setItem('id', 'sad');
        console.log(sessionStorage.getItem('id'));}

    )
  }

}


