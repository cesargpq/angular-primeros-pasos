import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
    <hr>
    <p>
      {{counter}}

    </p>
    <button (click)="increseBy(+1)" >Incrementar</button>
    <button (click)="increseBy(-counter)" >Incrementar</button>
    <button (click)="increseBy(-1)" >Decerementar</button>


  `
})
export class CounterComponent{

  counter = 0;
  increseBy(value:number):void{
    this.counter += value
  }

}
