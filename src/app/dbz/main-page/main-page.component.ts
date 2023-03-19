import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  charactersArr: Character[] = [
    {
      name: 'Goku',
      power: 10000
    },
    {
      name: 'Vegetta',
      power: 8000
    }
  ];

  newCharacter: Character = {
    name: 'Roshi',
    power: 1000
  }

  addNewCharacter(character: Character): void {
    this.charactersArr.push(character);
  }
}
