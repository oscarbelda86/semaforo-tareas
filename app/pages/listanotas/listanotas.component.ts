import { Component, OnInit } from '@angular/core';
import {listanotas} from '../../interfaces/notas';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-listanotas',
  templateUrl: './listanotas.component.html',
  styleUrls: ['./listanotas.component.scss']
})
export class ListanotasComponent implements OnInit {

  Lista = listanotas;
  
  constructor() { 
    
  }


  ngOnInit(): void {
  }

  eliminarnota(indice:number){
    this.Lista.splice(indice,1);
    console.log(this.Lista);
  }

  editarnota(indice:number){
    console.log(this.Lista);
  }

}
