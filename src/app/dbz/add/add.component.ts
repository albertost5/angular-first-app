import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html'
})
export class AddComponent {
  @Input() charactersArr: Character[] = [];

  @Input() newCharacter: Character = {
    name: '',
    power: 0
  }

  add(): void {
    if (this.newCharacter.name.trim().length === 0) {
      console.log('Name value empty.');
      return;
    }

    console.log('addFn', this.newCharacter);

    //  Add the new character to the charArr to be displayed
    this.charactersArr.push(this.newCharacter);

    //  Clean the Character object
    this.newCharacter = {
      name: '',
      power: 0
    }
  }
}
