import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-dos',
  imports: [],
  templateUrl: './componente-dos.html',
  styleUrl: './componente-dos.css',
})
export class ComponenteDos {
  nombre = 'Fernando';
  edad = 9;

  enlace = 'https://eldiario.es';
  mensaje = 'Vaya noticias...';

  activo = false;
  colorClase = 'colorUno';

  obtenerSaludo():string{
    return `Amigo soy ${this.nombre}, ya tengo ${this.edad} años`;
  }
}
