import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {

  public name:  string = 'Ironman';
  public age:   number = 45;
  public showN: boolean = true;
  public showA: boolean = true;

  get capitalizedName():string{
    return this.name.toUpperCase()
  }

  heroDescription():string{
    return `${this.name} - ${this.age}`
  }

  changeHero():void{
    this.showN = false;
    this.name = 'spiderman';
  }

  changeAge():void{
    this.showA = false;
    this.age = 40
  }
}
