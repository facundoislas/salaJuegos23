import { Component } from '@angular/core';
import { HpImageService } from 'src/app/Servicios/hp-image.service';

@Component({
  selector: 'app-preguntados',
  templateUrl: './preguntados.component.html',
  styleUrls: ['./preguntados.component.css']
})
export class PreguntadosComponent {

  personaje: any=[];
  arrayPersonajes: any =[];
  nombres = ["Harry Potter", 
  "Hermione Granger","Ron Weasley","Draco Malfoy","Minerva McGonagall","Cedric Diggory","Cho Chang", "Severus Snape", "Rubeus Hagrid", "Neville Longbottom"];
  opciones: any = [];
  cargo:boolean = false;
  eleccion!:string;
  cuenta= 0;
  Mensaje!:string;
  vidas = 5;
  termino=false;
  showSpinner=false;  
  constructor(private hpService: HpImageService){

  }

  async traerPersonajes()
  {
    for(let i= 0; i<10; i++){
      this.hpService.getPersonajes().subscribe((personaje:any) =>{
        this.arrayPersonajes.push(personaje[i]);
        
      });
    }
    

  }
  
  cargarSpinner()
  {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 4000); // 4 segundos = 4000 milisegundos
  }

  ngOnInit() { 
    this.cargarSpinner();
    this.traerPersonajes();
     }

   cargarPersonaje()
   {
    this.termino=false;
    this.cuenta=0;
    this.vidas=5;
    this.eleccion="";
    this.opciones = [];
    this.reiniciarNombres();
    let num= Math.floor(Math.random() * 10)
    this.personaje = this.arrayPersonajes[num];
    this.nombres.splice(num,1);
    this.generarOpciones();
    this.cargo = true;
    
   }

   cargarPersonaje2()
   {
    this.eleccion="";
    this.opciones = [];
    this.reiniciarNombres();
    let num= Math.floor(Math.random() * 10)
    this.personaje = this.arrayPersonajes[num];
    this.nombres.splice(num,1);
    this.generarOpciones();
    this.cargo = true;
    
   }

   generarOpciones()
   {
  
      this.nombres.sort(function(){return Math.random() - 0.5 });
      this.opciones.push(this.nombres[0]);
      this.opciones.push(this.nombres[1]);
      this.opciones.push(this.nombres[2]);
      this.opciones.push(this.personaje.name)

      this.opciones.sort(function(){return Math.random() - 0.5 });
   }

   reiniciarNombres()
   {
    this.nombres = ["Harry Potter", 
    "Hermione Granger","Ron Weasley","Draco Malfoy","Minerva McGonagall","Cedric Diggory","Cho Chang", "Severus Snape", "Rubeus Hagrid", "Neville Longbottom"];
   }

   verificar()
   {
    if(this.vidas>0)
    {
    if(this.personaje.name == this.eleccion)
    {
      this.cuenta= this.cuenta+1;
      this.MostarMensaje("Muy bien, adivinaste el personaje", true);
    }
    else
    {
      this.MostarMensaje("Ups, no adivinaste el personaje", false);
    }
    this.cargarPersonaje2();
    this.vidas=this.vidas-1;
    console.log(this.vidas);
    }
    if(this.vidas==0)
      this.termino=true;
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
