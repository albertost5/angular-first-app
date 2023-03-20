import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  private _charactersArr: Character[] = [
    {
      name: 'Goku',
      power: 10000
    },
    {
      name: 'Vegetta',
      power: 8000
    }
  ];

  get characters(): Character[] {
    return [...this._charactersArr];
  }

  constructor() { }

  addNewCharacter(character: Character): void {
    this._charactersArr.push(character);
  }
}
