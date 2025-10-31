import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';

type Alumno = {nombre: string, edad: number}


@Component({
  selector: 'app-root',
  imports: [JsonPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('captura-eventos');
  //USUARIO: podemos capturar los clicks, para ello creamos una función
  clicks = signal(0);
  //Con signal se pueden capturar eventos; hay que identificar cualquier cosa que pase.
  // En nuestro caso, para los clicks lo hacemos con el 0, que coge TODO
  hacerClick(){
    this.clicks.update(v => v+1)
  }
// con el siguiente signal, indicamos que vamos a recoger algo, pero aún no sabemos el qué
  mensaje = signal('')
  saludarA(nombre: string){
    this.mensaje.set(`Hola, ${nombre}`)
  }
// Con este signal, primero indicamos que puede venir cualquier evento o ninguno
  ultimoEvento = signal<any | null>(null);
  capturarEvento(ev: Event){
    const key = ev as KeyboardEvent;
    this.ultimoEvento.set({
      tecla: key.key ?? null
    })
  }


}
