import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-editarnota',
  templateUrl: './editarnota.component.html',
  styleUrls: ['./editarnota.component.scss']
})
export class EditarnotaComponent implements OnInit {
  ruta2:any;
  titulo:string ="";
  constructor(private ruta:ActivatedRoute) { }

  ngOnInit(): void {
    this.ruta2 = this.ruta.params.subscribe(parametros=>{
      this.titulo = parametros['titulo'];
      console.log(this.titulo)
  })
  }

}
