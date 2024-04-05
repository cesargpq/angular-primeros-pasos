import { Injectable } from '@angular/core';
import { v4 as uuid} from "uuid";
import { Character } from '../Interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krilin',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500
    }
  ];

  get getCharacter(){
    return this.characters;
  }
  OnDeleteCharacterById(id:string){
    this.characters = this.characters.filter(characters => characters.id !== id);
    // this.characters.splice(index,1);
  }
  onNewCharacter(character:Character){
    const newCharacter: Character = {
      id: uuid(),
      ...character
    }
    this.characters.push(newCharacter);

  }

}
