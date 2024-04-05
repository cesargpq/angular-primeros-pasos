import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroeNames : string [] = ['Spiderman','Ironman','Hulk','She Hulk','Thor']
  public hero? : string = ""

  deleteHero():void{
    this.hero = this.heroeNames.pop();

  }

}
