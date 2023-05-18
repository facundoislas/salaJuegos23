import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Componentes/login/login.component';
import { QuienSoyComponent } from './Componentes/quien-soy/quien-soy.component';
import { RegistroComponent } from './Componentes/registro/registro.component';
import { ErrorComponent } from './Componentes/error/error.component';
import { HomeComponent } from './Componentes/home/home.component';
import { ChatComponent } from './modulo-chat/chat/chat.component';
import { ModuloChatModule } from './modulo-chat/modulo-chat.module';

const routes: Routes = [

{path: '' , component: LoginComponent},
{path: 'login' , component: LoginComponent},
{path: 'quienSoy' , component: QuienSoyComponent},
{path: 'registro' , component: RegistroComponent},
{path: 'home' , component: HomeComponent},
{path: 'chat',  loadChildren: () => import('./modulo-chat/modulo-chat.module')
.then(m => m.ModuloChatModule)},
{path: 'juegos',  loadChildren: () => import('./modulo-juego/modulo-juego.module')
.then(m => m.ModuloJuegoModule)},
{path: '**' , component: ErrorComponent},

{path: 'error' , component: ErrorComponent}]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
