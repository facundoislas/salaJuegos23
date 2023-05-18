import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JuegosComponent } from './juegos/juegos.component';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
import { MayorMenorComponent } from './mayor-menor/mayor-menor.component';
import { PrincipalJuegosComponent } from './principal-juegos/principal-juegos.component';

const routes: Routes = [
  {path:'', component: JuegosComponent, children: [
    {path:'',component:PrincipalJuegosComponent},
    {path:'ahorcado', component: AhorcadoComponent},
    {path:'mayorMenor', component: MayorMenorComponent},
  ]},
  { path: 'juegos', component: JuegosComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuloJuegoRoutingModule { }
