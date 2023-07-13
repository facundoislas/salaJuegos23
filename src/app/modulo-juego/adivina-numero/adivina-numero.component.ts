import { Component } from '@angular/core';
import { AdivinaNumero } from 'src/app/clases/adivina-numero';

@Component({
  selector: 'app-adivina-numero',
  templateUrl: './adivina-numero.component.html',
  styleUrls: ['./adivina-numero.component.css']
})
export class AdivinaNumeroComponent {

  nuevoJuego!: AdivinaNumero;
  ocultarVerificar:boolean;
  arrayResultados! : Array<any>;
  intentos!: number;
  aux!: number;
  Mensaje!:string;
 
  constructor() { 
    
    this.ocultarVerificar=false;
    this.nuevoJuego = new AdivinaNumero("Adivina el Numero Secreto",false, 0, "0"); 
  }
  generarnumero() {
    this.nuevoJuego.generarnumero();
    this.nuevoJuego.numeroIngresado=0;
    this.aux=0;
    this.intentos=0;
  }
  
  verificar()
  {
    this.aux = this.nuevoJuego.numeroIngresado 
    
   
    //console.info("numero Secreto:",this.nuevoJuego.gano);  
    if (this.nuevoJuego.verificar()){
      
      this.MostarMensaje("Sos un Genio!!!",true);
      this.nuevoJuego.gano = true;
      this.nuevoJuego.numeroSecreto=0;
      this.intentos+= 1;

    }else{
      let mensaje:string;
      this.ocultarVerificar = false;
      switch (this.intentos) {
        case 0:
          mensaje="Casi casi";
          break;
        case 1:
          mensaje="No, intento fallido, ¡Ánimo!";
          break;
          case 2:
          mensaje="No, ¿Te estaras Acercando?";
          break;
          case 3:
          mensaje="No era el  "+this.nuevoJuego.numeroIngresado;
          break;
          default:
            mensaje="Llegaste a tu limite de intentos, iniciar nuevo juego";
      }
      this.intentos++;
      
      if(this.intentos<5)
      {
      this.MostarMensaje("#"+this.intentos+" "+mensaje+". AYUDA :"+this.nuevoJuego.retornarAyuda(), this.nuevoJuego.gano);
      this.nuevoJuego.numeroIngresado = this.aux;
      }
      else
      {
        this.nuevoJuego.numeroSecreto=0;
      }

    }
    this.nuevoJuego.intentos = this.intentos;
   
    
    console.info("numero Secreto:",this.nuevoJuego.gano);  
  }  

  
  MostarMensaje(mensaje:string,gano:boolean) {
    this.Mensaje = mensaje;
   var x = document.getElementById("snackbar");
   if(gano)
       x!.className = "show Ganador";
    else
      x!.className = "show Perdedor"
   var modelo = this;
   setTimeout(function(){ 
     x!.className = x!.className.replace("show", "");
     //modelo.ocultarVerificar=false;
    }, 3000);


  }

}
