import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../Interfaces/character.interface';
import { v4 as uuid } from "uuid";
@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  public deleteCharacter: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[]=[
    {
      name: '',
      power: 0
    }
  ]

  onDeleteCharacter(id?:string):void{
    if(!id) return;
    this.deleteCharacter.emit(id);

  }
}
