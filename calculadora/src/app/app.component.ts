import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'calculadora';

  resultado: number = 0;

  cifra1: number = 1;
  cifra2: number = 2;
  cifra3: number = 3;
  cifra4: number = 4;
  cifra5: number = 5;
  cifra6: number = 6;
  cifra7: number = 7;
  cifra8: number = 8;
  cifra9: number = 9;
  cifra0: number = 0;


  sumar() {
    this.resultado = this.cifra2 + this.cifra3;

  }
  restar() {
    this.resultado = this.cifra2 - this.cifra3;

  }
  multiplicar() {
    this.resultado = this.cifra2 * this.cifra3;

  }
  dividir() {
    this.resultado = this.cifra2 / this.cifra3;

  }
}
