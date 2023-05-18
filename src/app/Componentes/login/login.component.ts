import { Component } from '@angular/core';
import {addDoc, collection, getDoc, getDocs, updateDoc, Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  tipoUser!:string;
  user= { email : '', password : ''};
  Mensaje!:string;
  semuestra!:boolean;
  progreso!: number;
  progresoMensaje="esperando..."; 
  logeando=true;
  logueado!:boolean;
  ProgresoDeAncho!:string;

  clase="progress-bar progress-bar-info progress-bar-striped ";

  constructor(
    private router: Router,
    public authService : AuthService,
    private firestore: Firestore) {
      this.progreso=0;
      this.ProgresoDeAncho="0%";
      const session = sessionStorage.getItem('user');
    

          if(session==null)
          {
          this.logueado=false;
          }
          else{
          this.logueado=true;  
          }
  }

  ngOnInit() {
  }

  async entrar()
  {
    

		const user = this.authService.login(this.user.email, this.user.password);

		if (await user) {
      //this.mostrarSpinner = true;
      await new Promise(resolve => setTimeout(resolve, 2000));
      sessionStorage.setItem("user",this.user.email);
      sessionStorage.setItem("muestra","true");
			this.router.navigateByUrl('/home', { replaceUrl: true });
      this.guardarLogLogin();
		} else {
			this.MostarMensaje("Usuario o Clave incorrectos", true);
      this.borrar();
		} 
  
    //this.mostrarSpinner = false;
  }

  guardarLogLogin()
  {
    const col= collection(this.firestore, 'logueos');
    addDoc(col, {email: this.user.email, fecha: Date.now()})
  }

  MoverBarraDeProgreso() {
    /*
    this.logeando=false;
    this.clase="progress-bar progress-bar-danger progress-bar-striped active";
    this.progresoMensaje="Iniciando comprobacion"; 
    let timer = TimerObservable.create(200, 50);
    this.subscription = timer.subscribe(t => {
      console.log("inicio");
      this.progreso=this.progreso+1;
      this.ProgresoDeAncho=this.progreso+20+"%";
      switch (this.progreso) {
        case 15:
        this.clase="progress-bar progress-bar-warning progress-bar-striped active";
        this.progresoMensaje="Verificando Usuario..."; 
          break;
        case 30:
          this.clase="progress-bar progress-bar-Info progress-bar-striped active";
          this.progresoMensaje="Verificando contraseña.."; 
          break;
          case 60:
          this.clase="progress-bar progress-bar-success progress-bar-striped active";
          this.progresoMensaje="Recompilando Info del dispositivo..";
          break;
          case 75:
          this.clase="progress-bar progress-bar-success progress-bar-striped active";
          this.progresoMensaje="Desencriptacion de clave ..";
          break;
          case 85:
          this.clase="progress-bar progress-bar-success progress-bar-striped active";
          this.progresoMensaje="Clave ok, ingresando..";
          break;
          
        case 100:
          console.log("final");
          this.subscription.unsubscribe();
          this.Entrar();
          break;
      }     
    });
    //this.logeando=true;
  */}

  borrar()
    {
      this.user.email='';
      this.user.password='';
    }

    admin()
    {
      this.user.email="admin@admin.com";
        this.user.password="111111";
    }

    usuario()
    {
      this.user.email="usuario@usuario.com";
        this.user.password="222222";
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
