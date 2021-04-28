import { Component, OnInit } from '@angular/core';
import {Notas, listanotas} from '../../interfaces/notas';


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

}
