import { Component, HostBinding,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  formulario: FormGroup | undefined;

  constructor(private dataService: DataService, private _fb: FormBuilder) { }

  initForms() {
    this.formulario = this._fb.group({
      id: ['', Validators.required],
      pass: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    
  }

  confirmLogin(id: string,pass: string){
    this.dataService.login(id,pass).subscribe(
      res => {
        this.respuesta = res;
        sessionStorage.setItem('userDetails', 'sad');
        console.log(sessionStorage.getItem('id'));
        window.location.reload();
      },
      err => {console.error(err);

        /////////////////se quita cuando la sesion este vinculada a la api

        sessionStorage.setItem('id', 'sad');
        console.log(sessionStorage.getItem('id'));
        window.location.reload();
        /////////////
      }

    )
  }

}


