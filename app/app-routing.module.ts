import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/pages/home/home.component';
import { EditarnotaComponent } from '../app/pages/editarnota/editarnota.component';
/*import {ListanotasComponent} from '../app/pages/listanotas/listanotas.component';*/

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'editar/:titulo',component:EditarnotaComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
