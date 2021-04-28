import { Component, OnInit, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Notas,listanotas} from '../../interfaces/notas';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  formulario:FormGroup;
  estados:Array<String>=["Iniciada","En proceso", "Finalizada"];
  
  
  constructor(public form:FormBuilder) { 
    this.formulario=this.form.group({
      id:["",[Validators.required]],
      titulo:['',[Validators.required,]],
      estados:['',[Validators.required]]
    });
    

  }

  ngOnInit(): void {
  }
 
  limpiarDatos(){
   this.formulario.controls["titulo"].setValue("");
   this.formulario.controls["estados"].setValue("");
    
  }
  
  agregarNota(){
    listanotas.push({"titulo":this.formulario.value["titulo"],"estado":this.formulario.value["estado"]})
  }

}
