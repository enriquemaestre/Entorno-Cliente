import { Component,Input,OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.html',
  styleUrl: './hijo.css',
})
export class Hijo implements OnInit, OnChanges, OnDestroy{
  @Input() nombre=''

constructor(){
  console.log('constructor(): Instancia creada')
}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges(): Ha cambiado el @Input', changes)
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy(): Componente destruido')
  }
  ngOnInit(): void {
    console.log('ngOnInit(): Componente creado')
  }

}
