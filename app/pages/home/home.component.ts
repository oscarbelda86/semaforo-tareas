import { Component, OnInit, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {listanotas} from '../../interfaces/notas';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  formulario:FormGroup;
  estados:Array<String>=["Iniciada","En proceso", "Finalizada"];
  display = false;
  
  constructor(public form:FormBuilder) { 
    this.formulario=this.form.group({
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
    listanotas.push({titulo:this.formulario.value["titulo"],estado:this.formulario.value["estados"]});
  }



}
