import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuloJuegoRoutingModule } from './modulo-juego-routing.module';
import { JuegosComponent } from './juegos/juegos.component';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
import { MayorMenorComponent } from './mayor-menor/mayor-menor.component';
import { PrincipalJuegosComponent } from './principal-juegos/principal-juegos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PreguntadosComponent } from './preguntados/preguntados.component';
import { AdivinaNumeroComponent } from './adivina-numero/adivina-numero.component';
import { BtnVolverComponent } from './btn-volver/btn-volver.component';





@NgModule({
  declarations: [
    JuegosComponent,
    AhorcadoComponent,
    MayorMenorComponent,
    PrincipalJuegosComponent,
    PreguntadosComponent,
    AdivinaNumeroComponent,
    BtnVolverComponent

  ],
  imports: [
    CommonModule,
    ModuloJuegoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ModuloJuegoModule { }
