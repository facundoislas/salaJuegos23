import { Component } from '@angular/core';


@Component({
  selector: 'app-mayor-menor',
  templateUrl: './mayor-menor.component.html',
  styleUrls: ['./mayor-menor.component.css']
})
export class MayorMenorComponent {

  cartaPrincipal;
  cartaSecundaria;
  mensaje!:string;
 
  cuenta: number = 0;
  vidas: number = 5;
  mostrarFin: boolean= false;

  cartas = [{ numero: 1, pathImg: './../../assets/imagenes/baraja/1.jpg' },
  { numero: 2, pathImg: './../../assets/imagenes/baraja/2.jpg' },
  { numero: 3, pathImg: './../../assets/imagenes/baraja/3.jpg' },
  { numero: 4, pathImg: './../../assets/imagenes/baraja/4.jpg' },
  { numero: 5, pathImg: './../../assets/imagenes/baraja/5.jpg' },
  { numero: 6, pathImg: './../../assets/imagenes/baraja/6.jpg' },
  { numero: 7, pathImg: './../../assets/imagenes/baraja/7.jpg' },
  { numero: 8, pathImg: './../../assets/imagenes/baraja/8.jpg' },
  { numero: 9, pathImg: './../../assets/imagenes/baraja/9.jpg' },
  { numero:10, pathImg: './../../assets/imagenes/baraja/10.jpg' },
  { numero:11, pathImg: './../../assets/imagenes/baraja/11.jpg' },
  { numero:12, pathImg: './../../assets/imagenes/baraja/12.jpg' },

];


  constructor() {
    
    this.cartaPrincipal = this.calcularCartaRandom();
    this.cartaSecundaria = this.calcularCartaRandom();
  }

  ngOnInit(): void {
    console.log(this.cartas);
  }


  calcularCartaRandom() {
    return this.cartas[Math.floor(Math.random() * this.cartas.length)];
  }

  play(res:string){
    if(this.respuesta(res)){
      this.cuenta++;
      this.cartaPrincipal = this.cartaSecundaria;
      this.cartaSecundaria= this.calcularCartaRandom();
      this.mensaje ='BIEN!'
    }else{
      if(this.vidas > 0){ 
      this.vidas--;
      this.mensaje ='NO :(';
      
      this.cartaPrincipal = this.cartaSecundaria;
      this.cartaSecundaria= this.calcularCartaRandom();
      if(this.vidas == 0){
        this.mostrarFin= true; 
      }
    }
    }
  }


  respuesta(res: string):boolean{ 
    switch (res) {
      case 'mayor':
        if (this.cartaPrincipal.numero < this.cartaSecundaria.numero) {
          return true;
        } else {
          return false;
        }
        break;

      case 'igual':
        if (this.cartaPrincipal.numero == this.cartaSecundaria.numero) {
          return true;
        } else {
          return false;
        }
        break;
      case 'menor':
        if (this.cartaPrincipal.numero > this.cartaSecundaria.numero) {
          return true;
        } else {
          return false;
        }
        break;
      default:
        return false;
        break;
    }
  }

  reload() {
    window.location.reload();
  }

}
