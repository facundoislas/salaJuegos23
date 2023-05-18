import { Component } from '@angular/core';
import {Usuario} from '../../clases/usuario';
import { AuthService } from 'src/app/Servicios/auth.service';
import {addDoc, collection, getDoc, getDocs, updateDoc, Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  usuario!: Usuario;
  Mensaje!:string;
  


  constructor(private fire: Firestore, private authService: AuthService, private router: Router)
  {
    this.usuario = new Usuario;
  }

  ngOnInit() {
  }

  async enviar()
  {
    
    const user = this.authService.register(this.usuario.email, this.usuario.pass);
    if(await user)
    {
      this.usuario.tipo= "usuario";
    const col= collection(this.fire, 'Usuarios');
    addDoc(col, {
      email: this.usuario.email,
      nombre: this.usuario.nombre,
      apellido: this.usuario.apellido,
      tipo: this.usuario.tipo,
      contraseña: this.usuario.pass
    });
    this.router.navigateByUrl('/home', { replaceUrl: true });
    }

    else {
      console.log("nada")
			this.MostarMensaje("No se ha podido registrar, por favor revise los datos", true);

    }
  }

  MostarMensaje(mensaje:string,gano:boolean) {
    this.Mensaje = mensaje;
   var x = document.getElementById("snackbar");
   if(gano)
       x!.className = "show Ganador";
   var modelo = this;
   setTimeout(function(){ 
     x!.className = x!.className.replace("show", "");
     //modelo.ocultarVerificar=false;
    }, 3000);


  }

}
